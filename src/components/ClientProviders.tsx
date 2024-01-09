'use client';

import { authConfig } from '@/lib/clientUtils';
import type { AuthToken } from '@authorizerdev/authorizer-js';
import { AuthorizerProvider } from '@authorizerdev/authorizer-react';
import { ReactNode } from 'react';

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
