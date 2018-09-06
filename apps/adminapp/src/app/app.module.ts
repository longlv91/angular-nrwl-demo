import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import {
  StoreModule,
  ReducerManager
} from '@ngrx/store';
import * as fromState from './reducers/state.reducer';
import { EffectsModule, Actions } from '@ngrx/effects';
import { StateEffects } from './reducers/state.effects';
import { UserModule } from '@angular-nrwl-demo/user';
import { SharedUiModule } from '@angular-nrwl-demo/shared-ui';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationModule } from '@angular-nrwl-demo/notification';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    SharedUiModule,
    NotificationModule,
    UserModule,
    StoreModule.forRoot({state: fromState.reducer}),
    //StoreModule.forFeature('state', fromState.reducer),
    //EffectsModule.forRoot([]),
    //EffectsModule.forFeature([StateEffects]),
    AppRoutingModule
  ],
  providers: [ReducerManager, Actions],
  bootstrap: [AppComponent]
})
export class AppModule {}
