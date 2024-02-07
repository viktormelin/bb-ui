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
const UpdateMemberExpenseShare = ({
  userId,
  groupId,
  expenseId,
  value,
}: IProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleEditValue = (value: string | number) => {
    const numbered = Number(value);
    if (numbered > 100) return setInputValue(100);
    if (numbered < 1) return setInputValue(0);
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
      );

      if (response === 200)
        clearCacheByPath(
          '/(dashboard)/dashboard/groups/[group]/expenses/[expense]',
          'page',
        );
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Input
        variant="transparent"
        value={inputValue}
        type="text"
        inputMode="numeric"
        pattern="\d*"
        disabled={!isEditing}
        onChange={(e) => handleEditValue(e.target.value)}
        className="w-12"
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

export default UpdateMemberExpenseShare;
