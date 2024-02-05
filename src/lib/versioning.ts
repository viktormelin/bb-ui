import { generateAuthHeaders } from './authorizer';

export const getServerVersion = async () => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/version`, {
    method: 'GET',
    headers,
  });

  return await response.text();
};
