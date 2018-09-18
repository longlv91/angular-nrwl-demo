import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers/state.reducer';
// import { StateActionTypes } from '../../../reducers/state.actions';
import { UserStateActionTypes } from '../../../reducers/user-state.actions';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { NotificationService } from '@angular-nrwl-demo/notification';
import { UserDTO } from '../../../model/user-dto';
import { UserService } from '../../../service/user.service';
import * as uuid from 'uuid';
import { UserState } from '../../../reducers/user-state.model';

@Component({
  selector: 'angular-nrwl-demo-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  /*users: UserDTO[];
  selectedUser: UserDTO;
  displayDialog: boolean;
  newUser: boolean;
  user: UserDTO = new UserDTO();
  */
  users: UserState[];
  selectedUser: UserState;
  displayDialog: boolean;
  newUser: boolean;
  user: UserState;

  constructor(private userService: UserService, private store: Store<UserState>, private notifyService: NotificationService) {
    store.pipe(select('user'))
      .pipe(map(v => {
        const result : UserState[] = [];
        for (const i of v.ids) {
          result.push(v.entities[i]);
        }
        return result;}
        )).subscribe(
        value => {
          console.log(value);
          this.users = value;
        }
      );
  }

  ngOnInit() {
    this.userService.getAllUser().subscribe(
      value => {
        this.store.dispatch({ type: UserStateActionTypes.LoadUserStates, payload: {userStates: value} });
      },
      error => {
        console.log(error);
        this.notifyService.showError('Error: ' + error.message);
      }
    );
  }

  showDialogToAdd() {
    this.newUser = true;
    this.user = new UserDTO();
    this.displayDialog = true;
  }

  onRowSelect(event) {
    this.newUser = false;
    this.user = this.cloneUser(event.data);
    this.displayDialog = true;
  }

  cloneUser(u: UserDTO): UserDTO {
    const user = new UserDTO();
    user.id = u.id;
    user.username = u.username;
    user.password = u.password;
    user.firstName = u.firstName;
    user.lastName = u.lastName;
    user.phone = u.phone;
    user.address = u.address;
    return user;
  }

  isDuplicateUserName(isSelf: boolean): boolean {
    return this.users.filter(user => {
      if (isSelf) {
        return user.username === this.user.username;
      } else {
        return user.id !== this.user.id && user.username === this.user.username;
      }
    }).length > 0;
  }

  save() {
    if (this.newUser) {
      if (this.isDuplicateUserName(true)) {
        this.notifyService.showWarning('Username was existed. Please try again.');
        return false;
      }
      this.userService.saveUser(this.user)
        .pipe(
          catchError(() => of(new Error()))
        )
        .subscribe(
          user => {
            this.store.dispatch({ type: UserStateActionTypes.AddUserState, payload: {userState: user} });
            this.notifyService.showSuccess('Save User Successful');
          },
          error => {
            console.log(error);
            this.notifyService.showError('Error: ' + error.message);
          },
          () => {
            this.displayDialog = false;
          }
        )
    } else {
      if (this.isDuplicateUserName(false)) {
        this.notifyService.showWarning('Username was duplicated. Please try again.');
        return false;
      }
      this.userService.updateUser(this.user)
        .pipe(
          catchError(() => of(new Error()))
        )
        .subscribe(
          user => {
            this.store.dispatch({ type: UserStateActionTypes.UpsertUserState, payload: {userState: user} });
            this.notifyService.showSuccess('Update User Successful');
          },
          error => {
            console.log(error);
            this.notifyService.showError('Error: ' + error.message);
          },
          () => {
            this.displayDialog = false;
          }
        )
    }
  }

  delete() {
    if (!this.newUser) {
      this.userService.deleteUser(this.selectedUser)
        .pipe(
          catchError(() => of(new Error()))
        )
        .subscribe(
          user => {
            this.store.dispatch({ type: UserStateActionTypes.DeleteUserState, payload: {id: this.selectedUser.id} });
            this.notifyService.showSuccess('Delete User Successful');
          },
          error => {
            console.log(error);
            this.notifyService.showError('Error: ' + error.message);
          },
          () => {
            this.displayDialog = false;
          }
        )
    }

  }

}
