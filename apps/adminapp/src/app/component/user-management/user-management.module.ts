import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@angular-nrwl-demo/shared-ui';


@NgModule({
  imports: [
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '', component: UserListComponent
      }
    ])
  ],
  declarations: [UserListComponent]
})
export class UserManagementModule { }
