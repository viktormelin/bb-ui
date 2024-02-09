'use client';

import Button from '@/components/ui/Button';
import { clearCacheByPath } from '@/lib/cache';
import { resetExpense } from '@/lib/expenses';
import { useState } from 'react';

const ResetSplitsButton = ({ expenseId }: { expenseId: string }) => {
  const [isResetting, setIsResetting] = useState(false);
  const reset = async () => {
    setIsResetting(true);
    const response = await resetExpense(expenseId);

    if (response === 200)
      clearCacheByPath(
        '/(dashboard)/dashboard/groups/[group]/expense/[expense]',
        'page',
      );

    setIsResetting(false);
  };
  return (
    <Button onClick={reset} disabled={isResetting}>
      Reset Splits
    </Button>
  );
};

export default ResetSplitsButton;
