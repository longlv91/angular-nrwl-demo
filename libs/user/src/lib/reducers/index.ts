import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { UserDTO } from '../model/user-dto';
import * as userState from './state.reducer';


export interface State {
  data: userState.State;
}

export const reducers: ActionReducerMap<State> = {
  data: userState.reducer
};


export const metaReducers: MetaReducer<State>[] = [];
