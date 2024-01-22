import { IUserProfile } from '@/types/User';
import { cookies } from 'next/headers';

export const generateAuthHeaders = async () => {
  const nextCookies = cookies();
  const token = nextCookies.get('authorizer-client-next')?.value;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `Bearer ${token}`);
  return headers;
};

export const validateUser = async () => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/users/validate`, {
    headers,
  });

  if (response.ok) return true;
  return false;
};

export const getUserData = async (): Promise<IUserProfile> => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/users/me`, {
    headers,
  });

  const { user } = await response.json();
  return user;
};
