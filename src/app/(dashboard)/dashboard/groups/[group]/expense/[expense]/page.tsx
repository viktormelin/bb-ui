import AddMemberToExpense from '@/components/Dashboard/Forms/AddMemberToExpense';
import Text from '@/components/ui/Text';
import { calculateTotal, formatCurrency } from '@/lib/currency';
import { getExpenseById } from '@/lib/expenses';

const fetchExpense = async (id: string) => {
  const expense = await getExpenseById(id);
  return expense;
};

const GroupPage = async ({ params }: { params: { expense: string } }) => {
  const expense = await fetchExpense(params.expense);

  const usersNotInGroup = expense?.connected_group.users?.filter(
    (user) =>
      !expense.expense_splits.some((split) => split.group_usersId === user.id),
  );

  return (
    <>
      <header>
        <Text type="h1">{expense?.name}</Text>
        <Text>{expense?.description}</Text>
      </header>
      {expense ? (
        <>
          <section>
            <Text variant="xs">
              Expense total: {formatCurrency(expense.expense_total)}
            </Text>
            <Text variant="xs">
              Initial payer: {expense.initial_payer.auth_user?.given_name}{' '}
              {expense.initial_payer.auth_user?.family_name}
            </Text>
            <ul className="flex flex-col gap-2 my-4">
              {expense.expense_splits.map((split) => (
                <li
                  key={split.id}
                  className="rounded-lg w-full flex justify-between items-center bg-neutral-100 p-2"
                >
                  <div>
                    <Text>
                      {split.group_user.auth_user.given_name}{' '}
                      {split.group_user.auth_user.family_name}
                    </Text>
                  </div>
                  <div className="text-right">
                    <Text variant="xs">{formatCurrency(split.amount)}</Text>
                    <Text variant="xs" className="mb-0">
                      Share: {split.percentage}%
                    </Text>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <header>
              <Text type="h3">Add member to expense</Text>
            </header>
            {usersNotInGroup && usersNotInGroup?.length > 0 ? (
              <AddMemberToExpense
                members={usersNotInGroup}
                expense={expense.id}
              />
            ) : (
              <Text>No members to add...</Text>
            )}
          </section>
        </>
      ) : (
        <Text>No data available...</Text>
      )}
    </>
  );
};

export default GroupPage;
