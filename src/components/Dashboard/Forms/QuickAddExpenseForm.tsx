'use client';

import LoadingSpinner from '@/components/LoadingSpinner';
import Button from '@/components/ui/Button';
import ComboBox, { IComboBoxData } from '@/components/ui/ComboBox';
import Input from '@/components/ui/Input';
import MultiBox from '@/components/ui/MultiBox';
import Text from '@/components/ui/Text';
import { formatCurrency } from '@/lib/currency';
import { createGroup } from '@/lib/groups';
import { IUserGroup } from '@/types/Groups';
import { IUserProfile } from '@/types/User';
import { useAuthorizer } from '@authorizerdev/authorizer-react';
import { MinusCircleIcon } from '@heroicons/react/24/solid';
import { FormEvent, MouseEventHandler, useEffect, useState } from 'react';

interface IProps {
  groups: IUserGroup[];
  friends: IUserProfile['friends'];
}

const QuickAddExpenseForm = ({ groups, friends }: IProps) => {
  const { user, loading } = useAuthorizer();

  const mappedGroups: IComboBoxData[] = groups.map((group) => ({
    id: group.groups.id,
    name: group.groups.name,
  }));

  const defaultGroup = mappedGroups.length > 0 ? mappedGroups[0].name : '';
  const [selectedGroup, setSelectedGroup] = useState<string>(defaultGroup);
  const [selectedFriends, setSelectedFriends] = useState<IComboBoxData[]>([]);

  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [creatingGroup, setCreatingGroup] = useState(false);

  useEffect(() => {
    if (user && !loading) {
      setSelectedFriends([
        {
          id: String(0),
          name: user.email,
        },
      ]);
    }
  }, [loading]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreatingGroup(true);
    const body = {
      group: selectedGroup,
      users: selectedFriends,
      expense: { name: expenseName, money_total: expenseAmount },
    };

    createGroup(body);
    setCreatingGroup(false);
  };

  const handleSelectNewFriend = (values: IComboBoxData[]) => {
    for (const value of values) {
      if (selectedFriends.some((s) => s.name === value.name)) continue;

      setSelectedFriends([
        ...selectedFriends,
        {
          id: value.id,
          name: value.name,
        },
      ]);
    }
  };

  const removeFriend = (email: string) => {
    if (email === user?.email) return;
    setSelectedFriends(selectedFriends.filter((s) => s.name !== email));
  };

  if (loading) return <LoadingSpinner />;

  return (
    <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2">
      <ComboBox
        data={mappedGroups}
        label="Select or create new group"
        createNew="Create new group"
        selected={selectedGroup}
        setSelected={setSelectedGroup}
      />
      <MultiBox
        data={selectedFriends}
        label="Add users (email)"
        createNew="Invite"
        selected={selectedFriends}
        setSelected={handleSelectNewFriend}
      />
      <Input
        label="Expense name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />
      <Input
        label="Expense total amount (SEK)"
        type="number"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
      />
      <ul className="flex flex-col gap-2 my-4 p-2 bg-neutral-100 rounded-lg">
        <Text variant="h3">Users</Text>
        {selectedFriends.map((item) => (
          <li
            key={item.name}
            className="rounded-lg w-full flex justify-between items-center"
          >
            <div>
              <Text variant="xs" className="mb-0">
                {item.name}
              </Text>
            </div>
            <div className="flex items-center">
              <Button
                type="button"
                variant="neutral"
                className="p-0"
                disabled={item.name === user?.email}
                onClick={() => removeFriend(item.name)}
              >
                <MinusCircleIcon className="w-5 h-5" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Button disabled={creatingGroup}>Create expense</Button>
    </form>
  );
};

export default QuickAddExpenseForm;
