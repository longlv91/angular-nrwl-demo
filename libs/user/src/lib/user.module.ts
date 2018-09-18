import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from './service/user.service';
import {
  StoreModule,
  ReducerManager
} from '@ngrx/store';
import * as fromUser from './reducers';
import { UserListComponent } from './component/user-management/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserLayoutComponent } from './component/user-management/user-layout/user-layout.component';
import { SharedUiModule } from '@angular-nrwl-demo/shared-ui';
import * as fromState from './reducers/state.reducer';
import * as userState from './reducers/user-state.reducer';

@NgModule({
  declarations: [UserListComponent, UserLayoutComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    HttpClientModule,
    StoreModule.forRoot({'user': userState.reducer }),
    RouterModule.forChild([
      {
        path: '',
        component: UserLayoutComponent,
        children: [
          {
            path: '',
            component: UserListComponent
          }
        ]
      }
    ])
  ],
  providers: [ReducerManager, UserService],
  exports: [UserListComponent]
})
export class UserModule { }
