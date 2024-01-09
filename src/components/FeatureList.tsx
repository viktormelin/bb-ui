import Image from 'next/image';
import groupIcon from '/icons/group_icon.svg';
import { CalculatorIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { BellAlertIcon } from '@heroicons/react/24/solid';
import { CreditCardIcon } from '@heroicons/react/24/solid';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

const FeatureList = () => (
  <ul className="flex flex-col gap-4">
    <li className="bg-zinc-900/70 p-4 rounded-2xl">
      <h3 className="text-lg font-semibold flex gap-2 items-center mb-2">
        <UserGroupIcon className="w-6 h-6" />
        Create Groups Effortlessly
      </h3>
      <p className="text-sm text-gray-300">
        Organize your shared expenses by creating custom groups - be it for your
        household, travel buddies, or dining pals.
      </p>
    </li>
    <li className="bg-zinc-900/70 p-4 rounded-2xl">
      <h3 className="text-lg font-semibold flex gap-2 items-center mb-2">
        <CalculatorIcon className="w-6 h-6" />
        Flexible Expense Splitting
      </h3>
      <p className="text-sm text-gray-300">
        Split bills equally or customize how much each group member pays.
        BillBuddies adapts to your needs.
      </p>
    </li>
    <li className="bg-zinc-900/70 p-4 rounded-2xl">
      <h3 className="text-lg font-semibold flex gap-2 items-center mb-2">
        <BellAlertIcon className="w-6 h-6" />
        Instant Notifications
      </h3>
      <p className="text-sm text-gray-300">
        Stay informed with real-time updates on expenses, dues, and settlements.
      </p>
    </li>
    <li className="bg-zinc-900/70 p-4 rounded-2xl">
      <h3 className="text-lg font-semibold flex gap-2 items-center mb-2">
        <CreditCardIcon className="w-6 h-6" />
        Easy Settlements
      </h3>
      <p className="text-sm text-gray-300">
        Settle up with a tap. Our app calculates who owes what to whom,
        streamlining repayments.
      </p>
    </li>
    <li className="bg-zinc-900/70 p-4 rounded-2xl">
      <h3 className="text-lg font-semibold flex gap-2 items-center mb-2">
        <ShieldCheckIcon className="w-6 h-6" />
        Secure and Private
      </h3>
      <p className="text-sm text-gray-300">
        Your financial data is encrypted and protected. Share expenses, not
        personal information.
      </p>
    </li>
  </ul>
);

export default FeatureList;
