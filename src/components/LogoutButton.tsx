'use client';

import { useAuthorizer } from '@authorizerdev/authorizer-react';
import Button from './ui/Button';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const { setUser, setToken, authorizerRef } = useAuthorizer();
  const router = useRouter();

  const onLogout = async () => {
    setUser(null);
    setToken(null);
    await authorizerRef.logout();
    await fetch('/api/auth/logout');
    router.push('/');
  };
  return (
    <Button className="mt-4" onClick={onLogout}>
      Sign Out
    </Button>
  );
};

export default LogoutButton;
