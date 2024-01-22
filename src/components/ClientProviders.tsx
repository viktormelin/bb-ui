'use client';

import useUrl from '@/hooks/useUrl';
import { authConfig } from '@/lib/clientUtils';
import type { AuthToken } from '@authorizerdev/authorizer-js';
import { AuthorizerProvider } from '@authorizerdev/authorizer-react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const onStateChangeCallback = async ({
  token,
}: {
  token: AuthToken | null;
}) => {
  if (!token) return;

  await fetch('/api/auth/session', {
    method: 'POST',
    body: JSON.stringify(token),
    cache: 'no-store',
  });
};

const ClientProviders = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const hasJoinToken = sessionStorage.getItem('join');
    if (hasJoinToken) {
      const inviteUrl = '/join?token=' + hasJoinToken;
      router.push(inviteUrl);
    }
  }, []);

  return (
    <AuthorizerProvider
      config={authConfig}
      onStateChangeCallback={onStateChangeCallback}
    >
      {children}
    </AuthorizerProvider>
  );
};

export default ClientProviders;
