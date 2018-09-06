import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers/state.reducer';
import { StateActionTypes } from '../../../reducers/state.actions';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { NotificationService } from '@angular-nrwl-demo/notification';
import { UserDTO } from '../../../model/user-dto';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'angular-nrwl-demo-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserDTO[];
  selectedUser: UserDTO;
  displayDialog: boolean;
  newUser: boolean;
  user: UserDTO = new UserDTO();

  constructor(private userService: UserService, private store: Store<State>, private notifyService: NotificationService) {
    store.pipe(select('state'))
      .pipe(map(v => v.userList)).subscribe(
        value => {
          this.users = value;
        }
      );
  }

  ngOnInit() {
    this.userService.getAllUser().subscribe(
      value => {
        this.store.dispatch({ type: StateActionTypes.LoadUser, payload: value });
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

  save() {
    if (this.newUser) {
      this.userService.saveUser(this.user)
        .pipe(
          catchError(() => of(new Error()))
        )
        .subscribe(
          user => {
            this.store.dispatch({ type: StateActionTypes.SaveUser, payload: user });
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
      this.userService.updateUser(this.user)
        .pipe(
          catchError(() => of(new Error()))
        )
        .subscribe(
          user => {
            this.store.dispatch({ type: StateActionTypes.UpdateUser, payload: user });
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
            this.store.dispatch({ type: StateActionTypes.DeleteUser, payload: this.selectedUser });
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
