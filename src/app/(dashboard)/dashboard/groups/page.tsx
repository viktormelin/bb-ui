import Text from '@/components/ui/Text';
import { calculateTotal, formatCurrency } from '@/lib/currency';
import { getUserGroups } from '@/lib/groups';
import { IUserGroup } from '@/types/Groups';
import Link from 'next/link';
import React from 'react';

const fetchGroups = async () => {
  const { groups } = await getUserGroups();
  if (!groups) return [];

  return groups as IUserGroup[];
};

const GroupsPage = async () => {
  const groups = await fetchGroups();

  return (
    <>
      <header>
        <Text type="h1">My groups</Text>
      </header>
      <section>
        {groups.length > 0 ? (
          <ul className="flex flex-col gap-2 my-4">
            {groups.map((group) => (
              <Link href={`/dashboard/groups/${group.groups.id}`}>
                <li
                  key={group.groups.id}
                  className="rounded-lg w-full flex justify-between items-center bg-neutral-100 p-2"
                >
                  <div>
                    <Text>{group.groups.name}</Text>
                  </div>
                  <div className="text-right">
                    <Text variant="xs">
                      {formatCurrency(calculateTotal(group.groups.expenses!))}
                    </Text>
                    <Text variant="xs" className="mb-0">
                      {group.groups.users?.length} members
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
    </>
  );
};

export default GroupsPage;
