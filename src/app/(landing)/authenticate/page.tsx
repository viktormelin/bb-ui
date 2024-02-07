/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Button from '@/components/ui/Button';
import { useAuthorizer } from '@authorizerdev/authorizer-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const AuthPage = () => {
  const params = useSearchParams();
  const { authorizerRef, token } = useAuthorizer();
  const router = useRouter();

  useEffect(() => {
    if (token) router.push('/dashboard');
  }, [token]);

  const oauthLoginClick = (provider: string) => {
    console.log(params.get('token'), params.get('type'));

    if (params.get('token') && params.get('type')) {
      console.log('Setting values!');

      sessionStorage.setItem(params.get('type')!, params.get('token')!);
    }

    authorizerRef.oauthLogin(provider);
  };

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center p-4 md:max-w-2xl">
      <header>
        <h1 className="text-4xl font-medium tracking-tight mb-4">Login</h1>
      </header>
      <p className="text-lg text-gray-200">
        Ready to take control of your group expenses? Continue now and
        experience the easiest way to manage shared finances
      </p>
      <div className="w-full flex flex-col gap-4 mt-16">
        <Button
          variant="neutral"
          className="flex gap-3"
          onClick={() => oauthLoginClick('google')}
        >
          <Image
            className=""
            src="/icons/google_icon.png"
            width={16}
            height={16}
            alt="Google"
          />
          <span>Continue with Google</span>
        </Button>
        <Button
          disabled
          variant="neutral"
          className="flex gap-3"
          onClick={() => oauthLoginClick('apple')}
        >
          <Image
            className=""
            src="/icons/apple_icon.svg"
            width={16}
            height={16}
            alt="Apple"
          />
          <span>Continue with Apple</span>
        </Button>
        <Button
          variant="neutral"
          className="flex gap-3"
          onClick={() => oauthLoginClick('github')}
        >
          <Image
            className=""
            src="/icons/github-mark.png"
            width={16}
            height={16}
            alt="Apple"
          />
          <span>Continue with Github</span>
        </Button>
      </div>
    </main>
  );
};

export default AuthPage;
