'use client';

import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import { addUserToExpense } from '@/lib/expenses';
import { IGroupUser } from '@/types/Groups';

interface IProps {
  members?: IGroupUser[];
  expense: string;
}

const AddMemberToExpense = ({ members, expense }: IProps) => {
  if (!members || !expense) return;

  const onClick = async (memberId: string, groupsId: string) => {
    const response = await addUserToExpense(memberId, groupsId, expense);
  };

  return (
    <ul className="flex flex-col gap-2 my-4">
      {members.map((member) => (
        <li
          key={member.id}
          className="rounded-lg w-full flex justify-between items-center bg-neutral-100 p-2"
        >
          <Text className="w-full">
            {member.auth_user.given_name} {member.auth_user.family_name}
          </Text>
          <Button
            className="w-fit"
            variant="neutral"
            onClick={() => onClick(member.id, member.groupsId)}
          >
            Add
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default AddMemberToExpense;
