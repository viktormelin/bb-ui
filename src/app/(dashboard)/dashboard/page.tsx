import Text from '@/components/ui/Text';
import { getUserData } from '@/lib/authorizer';
import { formatCurrency } from '@/lib/currency';
import { getUserExpenses } from '@/lib/expenses';
import { IExpenseSplit } from '@/types/Expense';

const fetchUserData = async () => {
  return await getUserData();
};

const fetchExpenses = async () => {
  const { expenses } = await getUserExpenses();
  if (!expenses) return [];
  return expenses as IExpenseSplit[];
};

const DashboardPage = async () => {
  const userData = fetchUserData();
  const expensesData = fetchExpenses();
  const [user, expenses] = await Promise.all([userData, expensesData]);

  const totMoneyOutstanding = expenses.reduce((prev, curr) => {
    if (!curr.expense.settled) {
      return prev + curr.amount;
    } else {
      return prev + 0;
    }
  }, 0);

  const totMoneyTransactions = expenses.reduce((prev, curr) => {
    if (!curr.expense.settled) {
      return prev + curr.expense.expense_total;
    } else {
      return prev + 0;
    }
  }, 0);

  return (
    <>
      <section className="w-full">
        <header>
          <Text type="h1">Hi {user.given_name}</Text>
          <Text>View your current balance</Text>
        </header>
        <div className="flex flex-col gap-3 my-4">
          <div className="rounded-lg border border-neutral-200">
            <div className="p-5">
              <Text variant="xs">Total money outstanding*</Text>
              <Text variant="3xl">{formatCurrency(totMoneyOutstanding)}</Text>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200">
            <div className="p-5">
              <Text variant="xs">Total money in transactions</Text>
              <Text variant="3xl">{formatCurrency(totMoneyTransactions)}</Text>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
