import { IExpenseSplit, IGroupExpenses } from './Expense';

export interface IGroupUser {
  id: string;
  group_role: string;
  authorizer_usersId: string;
  groupsId: string;
  auth_user: {
    given_name: string;
    family_name?: string;
    picture?: string;
  };
}
export interface IGroup {
  id: string;
  name: string;
  invite_link?: string;
  users?: IGroupUser[];
  expenses?: IGroupExpenses[];
}

export interface IUserGroup {
  [x: string]: any;
  id: string;
  group_role: string;
  authorizer_usersId: string;
  groupsId: string;
  group?: IGroup;
  expense_splits?: IExpenseSplit[];
  auth_user?: {
    given_name?: string;
    family_name?: string;
  };
}
