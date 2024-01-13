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
