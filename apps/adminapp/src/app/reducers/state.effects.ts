import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { StateActionTypes } from './state.actions';

@Injectable()
export class StateEffects {
  @Effect() loadFoos$ = this.actions$.pipe(ofType(StateActionTypes.LoadUser));

  constructor(private actions$: Actions) {}
}
