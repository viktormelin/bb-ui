export interface IExpenseSplit {
  id: string;
  money_total: number;
  money_share: number;
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
}
