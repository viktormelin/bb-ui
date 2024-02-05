import Text from '@/components/ui/Text';
import { getUserData } from '@/lib/authorizer';

const ProfilePage = async () => {
  const user = await getUserData();

  return (
    <>
      <header>
        <Text type="h1">My Profile</Text>
      </header>
      <section>
        <p>Hello {user.email}</p>
        <p>{process.env.NEXT_PUBLIC_APP_VERSION}</p>
      </section>
    </>
  );
};

export default ProfilePage;
