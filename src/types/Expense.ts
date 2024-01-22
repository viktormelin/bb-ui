export interface IExpenseSplit {
  id: string;
  percentage: number;
  amount: number;
  expensesId: string;
  group_usersId: string;
  expense: IGroupExpenses;
}

export interface IGroupExpenses {
  id: string;
  name: string;
  description?: string;
  expense_total: number;
  groupsId: string;
  group_usersId: string;
}
