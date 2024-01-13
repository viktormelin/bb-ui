import Text from '@/components/ui/Text';
import { getUserData } from '@/lib/authorizer';
import { formatCurrency } from '@/lib/currency';

const mockData = {
  money_outstanding: 1235,
  money_owed: 311,
};

const DashboardPage = async () => {
  const userData = await getUserData();

  return (
    <>
      <section className="w-full">
        <header>
          <Text type="h1">Hi {userData.given_name}</Text>
          <Text>View your current balance and latest transactions</Text>
        </header>
        <div className="flex flex-col gap-3 my-4">
          <div className="rounded-lg border border-neutral-200">
            <div className="p-5">
              <Text variant="xs">Total money outstanding</Text>
              <Text variant="3xl">
                {formatCurrency(mockData.money_outstanding)}
              </Text>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200">
            <div className="p-5">
              <Text variant="xs">Total money owed</Text>
              <Text variant="3xl">{formatCurrency(mockData.money_owed)}</Text>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-neutral-200">
        <header>
          <Text type="h2" className="pt-2">
            Latest Transactions
          </Text>
        </header>
        <ul className="flex flex-col items-center gap-2 my-4">
          <li className="rounded-lg w-full flex justify-between items-center">
            <div>
              <Text variant="xl">Transaction Name</Text>
              <Text variant="xs">Transaction Group right here</Text>
            </div>
            <div>
              <Text variant="xl">+ {formatCurrency(42)}</Text>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default DashboardPage;
