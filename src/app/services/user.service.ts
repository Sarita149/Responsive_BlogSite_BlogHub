import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
    // console.log(user);
    return this.http.post('http://localhost:3000/api/register', user);
  }

  loginUser(user): Observable<any> {
    // console.log(user);
    return this.http.post('http://localhost:3000/api/login', user);
  }

}
