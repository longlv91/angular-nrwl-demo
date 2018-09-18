import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UserState } from './user-state.model';
import { UserStateActions, UserStateActionTypes } from './user-state.actions';

export interface State extends EntityState<UserState> {
  // additional entities state properties
}

export const adapter: EntityAdapter<UserState> = createEntityAdapter<UserState>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: UserStateActions
): State {
  switch (action.type) {
    case UserStateActionTypes.AddUserState: {
      return adapter.addOne(action.payload.userState, state);
    }

    case UserStateActionTypes.UpsertUserState: {
      return adapter.upsertOne(action.payload.userState, state);
    }

    case UserStateActionTypes.AddUserStates: {
      return adapter.addMany(action.payload.userStates, state);
    }

    case UserStateActionTypes.UpsertUserStates: {
      return adapter.upsertMany(action.payload.userStates, state);
    }

    case UserStateActionTypes.UpdateUserState: {
      return adapter.updateOne(action.payload.userState, state);
    }

    case UserStateActionTypes.UpdateUserStates: {
      return adapter.updateMany(action.payload.userStates, state);
    }

    case UserStateActionTypes.DeleteUserState: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserStateActionTypes.DeleteUserStates: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserStateActionTypes.LoadUserStates: {
      return adapter.addAll(action.payload.userStates, state);
    }

    case UserStateActionTypes.ClearUserStates: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
