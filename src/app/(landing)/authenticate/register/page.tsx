'use client';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAuthorizer } from '@authorizerdev/authorizer-react';
import Image from 'next/image';
import Link from 'next/link';

const RegisterPage = () => {
  const { authorizerRef } = useAuthorizer();

  const oauthLoginClick = (provider: string) => {
    authorizerRef.oauthLogin(provider);
  };

  return (
    <main className="p-4 my-16">
      <section className="h-screen w-full flex flex-col gap-6 items-center justify-center">
        <header>
          <h1 className="text-4xl font-medium tracking-tight">Register</h1>
        </header>
        <form className="w-full flex flex-col gap-4">
          <Input
            label="Your email"
            type="email"
            placeholder="Ex. james@bond.com"
            inputMode="email"
            required
          />
          <Input
            label="Your firstname"
            type="text"
            placeholder="Ex. James"
            required
          />
          <Input
            label="Your lastname"
            type="text"
            placeholder="Ex. Bond"
            required
          />
          <Input
            label="Your phonenumber"
            type="text"
            placeholder="Ex. 0701231231"
            inputMode="tel"
          />
          <Input
            label="Your password"
            type="password"
            placeholder="••••••••"
            required
          />
          <Input
            label="Your password, again"
            type="password"
            placeholder="••••••••"
            required
          />
          <Button>Create account</Button>
        </form>
        <div className="w-full flex gap-4 pt-6 border-t border-neutral-600">
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
          </Button>
        </div>
        <Link href="/authenticate" className="underline p-1">
          Already have an account? Login instead
        </Link>
      </section>
    </main>
  );
};

export default RegisterPage;
