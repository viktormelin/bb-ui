'use client';
import Button from '@/components/ui/Button';
import { clearCacheByPath } from '@/lib/cache';
import { settleGroupExpenses } from '@/lib/groups';

const SettleExpenseSplitButton = ({ groupId }: { groupId: string }) => {
  const settle = async () => {
    const response = await settleGroupExpenses(groupId);

    if (response === 200)
      clearCacheByPath('/(dashboard)/dashboard/groups/[group]', 'page');
  };
  return <Button onClick={settle}>Settle all expenses</Button>;
};

export default SettleExpenseSplitButton;
