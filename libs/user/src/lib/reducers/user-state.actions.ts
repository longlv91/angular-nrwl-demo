import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { UserState } from './user-state.model';

export enum UserStateActionTypes {
  LoadUserStates = '[UserState] Load UserStates',
  AddUserState = '[UserState] Add UserState',
  UpsertUserState = '[UserState] Upsert UserState',
  AddUserStates = '[UserState] Add UserStates',
  UpsertUserStates = '[UserState] Upsert UserStates',
  UpdateUserState = '[UserState] Update UserState',
  UpdateUserStates = '[UserState] Update UserStates',
  DeleteUserState = '[UserState] Delete UserState',
  DeleteUserStates = '[UserState] Delete UserStates',
  ClearUserStates = '[UserState] Clear UserStates'
}

export class LoadUserStates implements Action {
  readonly type = UserStateActionTypes.LoadUserStates;

  constructor(public payload: { userStates: UserState[] }) {}
}

export class AddUserState implements Action {
  readonly type = UserStateActionTypes.AddUserState;

  constructor(public payload: { userState: UserState }) {}
}

export class UpsertUserState implements Action {
  readonly type = UserStateActionTypes.UpsertUserState;

  constructor(public payload: { userState: UserState }) {}
}

export class AddUserStates implements Action {
  readonly type = UserStateActionTypes.AddUserStates;

  constructor(public payload: { userStates: UserState[] }) {}
}

export class UpsertUserStates implements Action {
  readonly type = UserStateActionTypes.UpsertUserStates;

  constructor(public payload: { userStates: UserState[] }) {}
}

export class UpdateUserState implements Action {
  readonly type = UserStateActionTypes.UpdateUserState;

  constructor(public payload: { userState: Update<UserState> }) {}
}

export class UpdateUserStates implements Action {
  readonly type = UserStateActionTypes.UpdateUserStates;

  constructor(public payload: { userStates: Update<UserState>[] }) {}
}

export class DeleteUserState implements Action {
  readonly type = UserStateActionTypes.DeleteUserState;

  constructor(public payload: { id: string }) {}
}

export class DeleteUserStates implements Action {
  readonly type = UserStateActionTypes.DeleteUserStates;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearUserStates implements Action {
  readonly type = UserStateActionTypes.ClearUserStates;
}

export type UserStateActions =
 LoadUserStates
 | AddUserState
 | UpsertUserState
 | AddUserStates
 | UpsertUserStates
 | UpdateUserState
 | UpdateUserStates
 | DeleteUserState
 | DeleteUserStates
 | ClearUserStates;
