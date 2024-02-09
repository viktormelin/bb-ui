'use client';

import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import { joinGroup } from '@/lib/groups';
import { useAuthorizer } from '@authorizerdev/authorizer-react';
import Link from 'next/link';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const params = useSearchParams();
  const { token } = useAuthorizer();
  const router = useRouter();

  const [isJoining, setIsJoining] = useState(false);

  console.log(params.get('token'));
  console.log(token);

  useEffect(() => {
    if (!params.get('token')) redirect('/');
  }, []);

  const handleJoin = async () => {
    setIsJoining(true);

    if (!token)
      router.push(`/authenticate?type=join&token=${params.get('token')}`);

    const response = await joinGroup(params.get('token')!);
    if (response.status === 201) {
      sessionStorage.clear();

      router.push('/dashboard');
    }
  };

  return (
    <main className="p-4">
      <section className="h-screen w-full flex flex-col justify-center">
        <header>
          <h1 className="text-4xl font-medium tracking-tight mb-4">
            Join group
          </h1>
        </header>
        <p className="text-lg text-gray-200">
          You have been invited to join a new group. Do you wish to join now?
          You can always come back to this link in the future
        </p>
        <Button className="mt-16" disabled={isJoining} onClick={handleJoin}>
          Join
        </Button>
      </section>
    </main>
  );
};

export default Page;
