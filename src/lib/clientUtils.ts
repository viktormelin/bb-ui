import { ClassValue } from 'class-variance-authority/types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const authConfig = {
  authorizerURL: 'https://auth.billbuddies.app',
  redirectURL: 'http://localhost:3001/dashboard',
  // redirectURL: 'https://billbuddies.app/dashboard',
  clientID: '2df42098-a689-4c65-97db-74ed796e5beb',
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
