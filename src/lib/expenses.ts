'use server';

import { generateAuthHeaders } from './authorizer';

export const getUserExpenses = async () => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/expenses`, {
    headers,
    cache: 'no-store',
  });

  if (response.ok) return await response.json();
  return null;
};
