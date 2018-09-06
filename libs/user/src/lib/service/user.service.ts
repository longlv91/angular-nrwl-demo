import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/user-dto';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public apiUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  getAllUser(): Observable<UserDTO[]> {
    return this.httpClient.get<UserDTO[]>(this.apiUrl);
  }

  saveUser(user: UserDTO): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>(this.apiUrl, user);
  }

  updateUser(user: UserDTO): Observable<UserDTO> {
    return this.httpClient.put<UserDTO>(this.apiUrl + `/${user.id}`, user);
  }

  deleteUser(user: UserDTO): Observable<UserDTO> {
    return this.httpClient.delete<UserDTO>(this.apiUrl + `/${user.id}`);
  }
}
