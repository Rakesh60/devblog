import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  url = 'http://localhost:4000/api/auth/'
  constructor(private http: HttpClient) {
   }
  createUser(formData: any): Observable<any> {
    return this.http.post(`${this.url}signup`, formData);

  }
  loginUser(loginData: any): Observable<any> {
    return this.http.post(`${this.url}login`, loginData);
  }
}


