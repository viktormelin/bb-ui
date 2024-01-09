import { cookies } from 'next/headers';

export const generateAuthHeaders = async () => {
  const nextCookies = cookies();
  const token = nextCookies.get('authorizer-client-next')?.value;
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  return headers;
};

export const validateUser = async () => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/users/me`, {
    headers,
    cache: 'no-store',
  });

  if (response.ok) return true;
  return false;
};

export const getUserData = async () => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/users/me`, {
    headers,
    cache: 'no-store',
  });

  // console.log(await response.json());

  return true;
};
