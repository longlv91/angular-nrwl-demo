import { Action } from '@ngrx/store';

export enum StateActionTypes {
  LoadUser = '[State] Load User',
  SaveUser = '[State] Save User',
  UpdateUser = '[State] Update User',
  DeleteUser = '[State] Delete User',
}

export class LoadUser implements Action {
  readonly type = StateActionTypes.LoadUser;
  constructor(public payload: any = null) { }
}

export class SaveUser implements Action {
  readonly type = StateActionTypes.SaveUser;
  constructor(public payload: any = null) { }
}

export class UpdateUser implements Action {
  readonly type = StateActionTypes.UpdateUser;
  constructor(public payload: any = null) { }
}

export class DeleteUser implements Action {
  readonly type = StateActionTypes.DeleteUser;
  constructor(public payload: any = null) { }
}

export type StateActions = | LoadUser | SaveUser | UpdateUser | DeleteUser ;
