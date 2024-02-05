import LogoutButton from '@/components/LogoutButton';
import Text from '@/components/ui/Text';
import { getUserData } from '@/lib/authorizer';
import { getServerVersion } from '@/lib/versioning';

const ProfilePage = async () => {
  const user = await getUserData();
  const serverVersion = await getServerVersion();

  return (
    <>
      <header>
        <Text type="h1">My Profile</Text>
      </header>
      <section className="flex flex-col">
        <div className="flex-1">
          <Text>
            Signed in as {user.given_name} {user.family_name}
          </Text>
          <Text>
            Current auth role: <span className="uppercase">{user.roles}</span>
          </Text>
          <LogoutButton />
        </div>
        <div className="flex flex-col items-center justify-center mt-16 text-center">
          <Text variant="xs">
            Client version: {process.env.npm_package_version}
          </Text>
          <Text variant="xs">Server version: {serverVersion}</Text>
          <Text variant="xs" className="mt-2">
            To manage your profile settings, please visit your auth provider{' '}
            {user.signup_methods}
          </Text>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
