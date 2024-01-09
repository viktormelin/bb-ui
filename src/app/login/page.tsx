/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Authorizer, useAuthorizer } from '@authorizerdev/authorizer-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = () => {
  const { token } = useAuthorizer();
  const router = useRouter();

  useEffect(() => {
    if (token) router.push('/dashboard');
  }, [token]);

  return <Authorizer />;
};

export default LoginPage;
