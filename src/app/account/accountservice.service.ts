import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  url = 'http://localhost:9000/'
  constructor(private http: HttpClient) { }
  createUser(formData: any): Observable<any> {
    return this.http.post(`${this.url}api/signup`, formData);
  }
}


