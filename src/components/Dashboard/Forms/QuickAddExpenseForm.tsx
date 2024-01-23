'use client';

import LoadingSpinner from '@/components/LoadingSpinner';
import Button from '@/components/ui/Button';
import ComboBox, { IComboBoxData } from '@/components/ui/ComboBox';
import Input from '@/components/ui/Input';
import { createGroup } from '@/lib/groups';
import { IUserGroup } from '@/types/Groups';
import { IUserProfile } from '@/types/User';
import { useAuthorizer } from '@authorizerdev/authorizer-react';
import { FormEvent, useState } from 'react';

interface IProps {
  groups: IUserGroup[];
  friends: IUserProfile['friends'];
}

const QuickAddExpenseForm = ({ groups, friends }: IProps) => {
  const { loading } = useAuthorizer();

  // console.log(groups);

  const mappedGroups: IComboBoxData[] = groups.map((group) => ({
    id: group.id,
    name: group.groups.name,
  }));

  const defaultGroup = mappedGroups.length > 0 ? mappedGroups[0].name : '';
  const [selectedGroup, setSelectedGroup] = useState<string>(defaultGroup);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [creatingGroup, setCreatingGroup] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreatingGroup(true);
    const body = {
      group: selectedGroup,
      expense: { name: expenseName, expense_total: Number(expenseAmount) },
    };

    createGroup(body);
    setCreatingGroup(false);
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
      {creatingGroup ? (
        <LoadingSpinner />
      ) : (
        <Button disabled={creatingGroup}>Create expense</Button>
      )}
    </form>
  );
};

export default QuickAddExpenseForm;
