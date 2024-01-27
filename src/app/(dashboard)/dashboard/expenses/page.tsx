import Text from '@/components/ui/Text';
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

// [
//   {
//     id: 'clrf440yh0005sdcgjb1n4joe',
//     money_total: 1250,
//     money_share: 1,
//     expensesId: 'clrf43yn50003sdcgqahha8kl',
//     group_usersId: 'clrf43yn50002sdcgdikanxv5',
//     expense: {
//       id: 'clrf43yn50003sdcgqahha8kl',
//       name: 'Expense 1',
//       description: null,
//       expense_total: 1250,
//       groupsId: 'clrf43yn50000sdcgszmp1ueu'
//     }
//   }
// ]

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
                    <Text>{expense.expense.name}</Text>
                  </div>
                  <div className="text-right">
                    <Text variant="xs">
                      {formatCurrency(
                        expense.amount * (expense.percentage / 100),
                      )}
                    </Text>
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
