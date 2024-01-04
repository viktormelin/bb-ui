import { cookies } from 'next/headers';

const DashboardPage = async () => {
  const nextCookies = cookies();
  const token = nextCookies.get('authorizer-client-next')?.value;

  console.log(token);

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);

  const response = await fetch('http://127.0.0.1:3000/template', {
    headers,
    cache: 'no-store',
  });
  const data = await response.text();

  console.log(response, data);

  return <div>Hello World!</div>;
};

export default DashboardPage;
