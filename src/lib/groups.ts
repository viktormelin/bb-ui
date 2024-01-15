'use server';

import { redirect } from 'next/navigation';
import { generateAuthHeaders } from './authorizer';

export const getUserGroups = async () => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/groups`, {
    headers,
    cache: 'no-store',
  });

  if (response.ok) return await response.json();
  return null;
};

export const createGroup = async (data: any) => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/groups/new`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });

  const body = await response.json();

  if (response.ok) {
    redirect(`/dashboard/groups/${body.group.id}`);
  } else {
    console.error(body.error);
  }
};
