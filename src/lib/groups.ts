'use server';

import { redirect } from 'next/navigation';
import { generateAuthHeaders } from './authorizer';
import { IGroup } from '@/types/Groups';

export const getUserGroups = async () => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/groups`, {
    headers,
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

interface GroupResponse {
  group: IGroup;
}
export const getGroupFromId = async (id: string) => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/groups/${id}`, {
    headers,
  });

  return (await response.json()) as Promise<GroupResponse>;
};

export const joinGroup = async (id: string) => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/groups/join/${id}`, {
    method: 'POST',
    headers,
  });

  console.log(response);

  return { data: await response.json(), status: response.status };
};

export const calculateGroupSplits = async (groupId: string) => {
  const headers = await generateAuthHeaders();
  const response = await fetch(
    `${process.env.API_ROUTE}/groups/calculate/${groupId}`,
    {
      method: 'POST',
      headers,
    },
  );

  console.log(response);

  return { data: await response.json(), status: response.status };
};
