import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUser(url): Observable<UserDTO[]> {
    return this.httpClient.get<UserDTO[]>(url);
  }

  saveUser(url, user: UserDTO): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>(url, user);
  }

  updateUser(url, user: UserDTO): Observable<UserDTO> {
    return this.httpClient.put<UserDTO>(url + `/${user.id}`, user);
  }

  deleteUser(url, user: UserDTO): Observable<UserDTO> {
    return this.httpClient.delete<UserDTO>(url + `/${user.id}`);
  }
}
