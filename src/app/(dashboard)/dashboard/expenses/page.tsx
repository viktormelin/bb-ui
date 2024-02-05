import Text from '@/components/ui/Text';
import { cn } from '@/lib/clientUtils';
import { calculateTotal, formatCurrency } from '@/lib/currency';
import { getUserExpenses } from '@/lib/expenses';
import { IExpenseSplit } from '@/types/Expense';
import Link from 'next/link';
import React from 'react';

const fetchExpenses = async () => {
  const { expenses } = await getUserExpenses();
  if (!expenses) return [];
  return expenses as IExpenseSplit[];
};

const page = async () => {
  const expenses = await fetchExpenses();

  return (
    <>
      <header>
        <Text type="h1">My expenses</Text>
      </header>
      <section>
        {expenses.length > 0 ? (
          <ul className="flex flex-col gap-2 my-4">
            {expenses.map((expense) => (
              <Link
                key={expense.id}
                href={`/dashboard/groups/${expense.expense.groupsId}/expense/${expense.expensesId}`}
              >
                <li
                  key={expense.id}
                  className="rounded-lg w-full flex justify-between items-center bg-neutral-100 p-2"
                >
                  <div>
                    <Text
                      className={cn(expense.expense.settled && 'line-through')}
                    >
                      {expense.expense.name}
                    </Text>
                  </div>
                  <div
                    className={cn(
                      'text-right',
                      expense.expense.settled && 'line-through',
                    )}
                  >
                    <Text variant="xs">{formatCurrency(expense.amount)}</Text>
                    <Text variant="xs" className="mb-0">
                      Share: {expense.percentage}%
                    </Text>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <Text>No expenses found...</Text>
        )}
      </section>
    </>
  );
};

export default page;
