import { StateActions, StateActionTypes } from './state.actions';
import { UserDTO } from '@angular-nrwl-demo/user';

export interface State {
  userList: UserDTO[];
}

export const initialState: State = { userList: [] };

export function reducer(state = initialState, action: StateActions): State {
  switch (action.type) {
    case StateActionTypes.LoadUser:
      return { userList: action.payload };
    case StateActionTypes.SaveUser:
      return { userList: [...state.userList, action.payload] };
    case StateActionTypes.UpdateUser:
      return {
        userList: state.userList.map(item => {
          if (item.id === action.payload.id) {
            item = action.payload;
          }
          return item;
        })
      };
    case StateActionTypes.DeleteUser:
      return {
        userList: state.userList.filter(item => {
          return item.id !== action.payload.id;
        })
      };
    default:
      return state;
  }
}
