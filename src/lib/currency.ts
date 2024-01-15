import { IGroupExpenses } from '@/types/Groups';

export const formatCurrency = (num: number) =>
  new Intl.NumberFormat('se-SE', { style: 'currency', currency: 'SEK' }).format(
    num,
  );

export const calculateTotal = (arr: IGroupExpenses[]) => {
  let total = 0;
  arr.map((item) => (total += item.expense_total));
  return total;
};
