'use server';

import { generateAuthHeaders } from './authorizer';

export const getUserExpenses = async () => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/expenses`, {
    headers,
  });

  console.log(response);

  if (response.ok) {
    const body = (await response.json()) ?? [];
    console.log(body);

    return body;
  }

  return null;
};
