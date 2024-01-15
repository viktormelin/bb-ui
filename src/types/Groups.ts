import { IExpenseSplit, IGroupExpenses } from './Expense';

export interface IGroupUser {
  id: string;
  role: string;
  authorizer_usersId: string;
  groupsId?: string;
}
export interface IGroup {
  id: string;
  name: string;
  invite_link?: string;
  users?: IGroupUser[];
  expenses?: IGroupExpenses[];
}

export interface IUserGroup {
  id: string;
  role: string;
  authorizer_usersId: string;
  groupsId: string;
  groups: IGroup;
  expense_splits?: IExpenseSplit[];
}
