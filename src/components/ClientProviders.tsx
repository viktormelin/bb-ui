'use client';

import useUrl from '@/hooks/useUrl';
import { authConfig, cn } from '@/lib/utils';
import type { AuthToken } from '@authorizerdev/authorizer-js';
import { AuthorizerProvider } from '@authorizerdev/authorizer-react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import NavProvider from './Dashboard/Navbar/NavProvider';
import useViewport from '@/hooks/useViewport';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
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

const ClientProviders = ({ children }: { children: ReactNode }) => {
  const isMobile = useViewport();
  const { currentPath } = useUrl();

  return (
    <AuthProvider>
      <body
        className={cn(
          'flex h-screen justify-center',
          openSans.className,
          isMobile && 'flex-col',
        )}
      >
        <main
          className={cn(
            'p-4 flex-1 overflow-auto',
            !isMobile && 'order-1 w-full max-w-2xl',
          )}
        >
          {children}
        </main>
        <NavProvider />
      </body>
    </AuthProvider>
  );
};

export default ClientProviders;
