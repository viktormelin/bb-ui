import { getUserData } from '@/lib/authorizer';
import { cookies } from 'next/headers';

const DashboardPage = async () => {
  await getUserData();

  return <div>Hello World!</div>;
};

export default DashboardPage;
