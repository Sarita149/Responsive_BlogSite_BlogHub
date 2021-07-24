import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { RequestOptions } from 'http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http: HttpClient) { }

  // options:RequestOptions = {}
  createHeader() {
    let token = localStorage.getItem("token");
  }

  allblogs(): Observable<any> {
    return this.http.get('http://localhost:3000/api/allblogs');
  }


  allHomeData(): Observable<any> {
    return this.http.get('http://localhost:3000/api/allHomeData');
  }

  addblog(blog: any): Observable<any> {
    // this.createHeader();
    return this.http.post('http://localhost:3000/api/addblog', blog);
  }
}
