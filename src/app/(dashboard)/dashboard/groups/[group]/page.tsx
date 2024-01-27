import InviteButton from '@/components/Dashboard/InviteButton';
import Text from '@/components/ui/Text';
import { calculateTotal, formatCurrency } from '@/lib/currency';
import { getGroupFromId } from '@/lib/groups';
import Link from 'next/link';

const fetchGroup = async (id: string) => {
  const data = await getGroupFromId(id);
  return data.group;
};
const GroupPage = async ({ params }: { params: { group: string } }) => {
  const group = await fetchGroup(params.group);

  return (
    <>
      <header>
        <Text type="h1">{group.name}</Text>
      </header>
      <section>
        <header>
          <Text>Expenses</Text>
        </header>
        {group.expenses && group.expenses.length > 0 ? (
          <ul className="flex flex-col gap-2 my-4">
            {group.expenses.map((expense) => (
              <Link
                key={expense.id}
                href={`/dashboard/groups/${expense.groupsId}/expense/${expense.id}`}
              >
                <li
                  key={expense.id}
                  className="rounded-lg w-full flex justify-between items-center bg-neutral-100 p-2"
                >
                  <div>
                    <Text>{expense.name}</Text>
                  </div>
                  <div className="text-right">
                    <Text variant="xs" className="mb-0">
                      {formatCurrency(calculateTotal(group.expenses!))}
                    </Text>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <Text>No groups found...</Text>
        )}
      </section>
      <section>
        <header>
          <Text>Members</Text>
        </header>
        {group.users && group.users.length > 0 ? (
          <ul className="flex flex-col gap-2 my-4">
            {group.users.map((user) => (
              <li
                key={user.id}
                className="rounded-lg w-full flex justify-between items-center bg-neutral-100 p-2"
              >
                <div>
                  <img
                    src={user.auth_user.picture}
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
                <div>
                  <Text>
                    {user.auth_user.given_name} {user.auth_user.family_name}
                  </Text>
                  <Text variant="xs" className="text-right">
                    {user.group_role}
                  </Text>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Text>No groups found...</Text>
        )}

        <InviteButton link={group.invite_link} />
      </section>
    </>
  );
};

export default GroupPage;
