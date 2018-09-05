import { Component, OnInit } from '@angular/core';
import { UserService, UserDTO } from '@angular-nrwl-demo/user';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers/state.reducer';
import { StateActionTypes } from '../../../reducers/state.actions';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'angular-nrwl-demo-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  url = 'http://localhost:6969/users';
  users: UserDTO[];
  selectedUser: UserDTO;
  displayDialog: boolean;
  newUser: boolean;
  user: UserDTO = new UserDTO();

  constructor(private userService: UserService, private store: Store<State>) {
    store.pipe(select('state'))
      .pipe(map(v => v.userList)).subscribe(
        value => {
          this.users = value;
        }
      );
  }

  ngOnInit() {
    this.userService.getAllUser(this.url).subscribe(
      value => {
        this.store.dispatch({ type: StateActionTypes.LoadUser, payload: value });
      },
      error => {
        console.log(error);
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
      this.userService.saveUser(this.url, this.user)
        .pipe(
          catchError(() => of(new Error()))
        )
        .subscribe(
          user => {
            this.store.dispatch({ type: StateActionTypes.SaveUser, payload: user });
          },
          error => {
            console.log(error);
          },
          () => {
            this.displayDialog = false;
          }
        )
    } else {
      this.userService.updateUser(this.url, this.user)
        .pipe(
          catchError(() => of(new Error()))
        )
        .subscribe(
          user => {
            this.store.dispatch({ type: StateActionTypes.UpdateUser, payload: user });
          },
          error => {
            console.log(error);
          },
          () => {
            this.displayDialog = false;
          }
        )
    }
  }

  delete() {
    if (!this.newUser) {
      this.userService.deleteUser(this.url, this.selectedUser)
        .pipe(
          catchError(() => of(new Error()))
        )
        .subscribe(
          user => {
            this.store.dispatch({ type: StateActionTypes.DeleteUser, payload: this.selectedUser });
          },
          error => {
            console.log(error);
          },
          () => {
            this.displayDialog = false;
          }
        )
    }

  }

}
