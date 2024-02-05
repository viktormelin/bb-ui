'use client';

import Button from '@/components/ui/Button';
import { clearCacheByPath } from '@/lib/cache';
import { resetExpense } from '@/lib/expenses';

const ResetSplitsButton = ({ expenseId }: { expenseId: string }) => {
  const reset = async () => {
    const response = await resetExpense(expenseId);

    if (response === 200)
      clearCacheByPath(
        '/(dashboard)/dashboard/groups/[group]/expenses/[expense]',
        'page',
      );
  };
  return <Button onClick={reset}>Reset Splits</Button>;
};

export default ResetSplitsButton;
