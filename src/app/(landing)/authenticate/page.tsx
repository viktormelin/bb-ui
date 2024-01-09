/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Button from '@/components/ui/Button';
import { useAuthorizer } from '@authorizerdev/authorizer-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthPage = () => {
  const { authorizerRef, token } = useAuthorizer();
  const router = useRouter();

  useEffect(() => {
    if (token) router.push('/dashboard');
  }, [token]);

  const oauthLoginClick = (provider: string) => {
    authorizerRef.oauthLogin(provider);
  };

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center p-4">
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
            src="/images/google_icon.png"
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
            src="/images/apple_icon.svg"
            width={16}
            height={16}
            alt="Apple"
          />
          <span>Continue with Apple</span>
        </Button>
      </div>
    </main>
  );
};

export default AuthPage;
