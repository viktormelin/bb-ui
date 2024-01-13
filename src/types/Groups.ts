export interface IGroup {
  id: string;
  name: string;
  users?: any;
  expenses?: any;
}

export interface IUserGroup {
  id: string;
  role: string;
  authorizer_usersId: string;
  groupsId: string;
  groups: IGroup;
  expense_splits?: any;
}
