import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  registerUser(user){
    return this.http.post<any>('http://localhost:3000/api/register',user)
  }

  loginUser(user){
    return this.http.post<any>('http://localhost:3000/api/login',user)
  }

}
