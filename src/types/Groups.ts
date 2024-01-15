export interface IGroupUser {
  id: string;
  role: string;
  authorizer_usersId: string;
  groupsId?: string;
}

export interface IGroupExpenses {
  id: string;
  name: string;
  description?: string;
  expense_total: number;
  groupsId: string;
}

export interface IGroupExpenseSplits {
  id: string;
  money_total: number;
  money_share: number;
  expensesId: string;
  authorizer_usersId: string;
  group_usersId: string;
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
  expense_splits?: IGroupExpenseSplits[];
}
