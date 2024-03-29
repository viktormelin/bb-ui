'use client';

import Input from '@/components/ui/Input';
import { clearCacheByPath } from '@/lib/cache';
import { editExpenseSplit } from '@/lib/expenses';
import {
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';
import React, { useState } from 'react';

interface IProps {
  userId: string;
  groupId: string;
  expenseId: string;
  value: number;
}
const UpdateMemberExpenseShareAmount = ({
  userId,
  groupId,
  expenseId,
  value,
}: IProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleEditValue = (value: string | number) => {
    const numbered = Number(value);
    return setInputValue(numbered);
  };

  const toggleEditMode = async () => {
    if (isEditing) {
      setIsEditing(false);
      const response = await editExpenseSplit(
        userId,
        groupId,
        expenseId,
        inputValue,
        'amount',
      );

      console.log(response);

      if (response === 200)
        clearCacheByPath(
          '/(dashboard)/dashboard/groups/[group]/expense/[expense]',
          'page',
        );
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <span className="block text-xs font-medium text-neutral-400">kr</span>
      <Input
        variant="transparent"
        value={inputValue}
        type="text"
        inputMode="numeric"
        pattern="\d*"
        disabled={!isEditing}
        onChange={(e) => handleEditValue(e.target.value)}
        className="w-12 p-1"
      />
      {isEditing ? (
        <CheckCircleIcon
          className="w-6 h-6 hover:cursor-pointer"
          onClick={toggleEditMode}
        />
      ) : (
        <AdjustmentsHorizontalIcon
          className="w-6 h-6 hover:cursor-pointer"
          onClick={toggleEditMode}
        />
      )}
    </div>
  );
};

export default UpdateMemberExpenseShareAmount;
