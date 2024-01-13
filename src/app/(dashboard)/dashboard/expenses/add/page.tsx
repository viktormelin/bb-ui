import QuickAddExpenseForm from '@/components/Dashboard/Forms/QuickAddExpenseForm';
import Text from '@/components/ui/Text';
import { getUserData } from '@/lib/authorizer';
import { getUserGroups } from '@/lib/groups';
import { IUserGroup } from '@/types/Groups';
import { IUserProfile } from '@/types/User';

const fetchGroups = async () => {
  const { groups } = await getUserGroups();
  if (!groups) return [];

  return groups as IUserGroup[];
};

const fetchFriends = async () => {
  const { friends } = await getUserData();
  if (!friends) return [];

  return friends as IUserProfile['friends'];
};

const AddExpensePage = async () => {
  const groupsData = fetchGroups();
  const friendsData = fetchFriends();
  const [groups, friends] = await Promise.all([groupsData, friendsData]);

  return (
    <>
      <header>
        <Text type="h1">Add new expense</Text>
        <Text>
          Quickly add new expense to one of your existing groups, or create a
          new group at the same time
        </Text>
      </header>
      <section>
        <QuickAddExpenseForm groups={groups} friends={friends} />
      </section>
    </>
  );
};

export default AddExpensePage;
