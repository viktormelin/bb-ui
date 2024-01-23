import { IGroup, IGroupUser, IUserGroup } from './Groups';

export interface IExpenseSplit {
  id: string;
  percentage: number;
  amount: number;
  expensesId: string;
  group_usersId: string;
  expense: IGroupExpenses;
  group_user: IGroupUser;
}

export interface IGroupExpenses {
  id: string;
  name: string;
  description?: string;
  expense_total: number;
  groupsId: string;
  group_usersId: string;
}

export interface IGroupExpenseWithPayer extends IGroupExpenses {
  expense_splits: IExpenseSplit[];
  initial_payer: IUserGroup;
  connected_group: IGroup;
}
