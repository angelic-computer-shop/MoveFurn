import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Drivers } from '../models/drivers';
import { Users } from '../models/users';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

private apiUrl = 'http://localhost:9000';


  
  constructor(private http: HttpClient) {}

  

  // login(credentials: {email: string, password: string}): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/users/auth`,credentials);
      
  // }
//Register as a driver

  register(drivers:Drivers): Observable<any> {
    return this.http.post(`${this.apiUrl}/driver`,drivers);
     
      
     
   
  }
  //register as a user

  registers(users:Users): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`,users);
     
      
     
   
  }



  

  // logout(): Observable<any> {
  //   return this.http.post(apiUrl + 'signout', { }, httpOptions);
  // }

  

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/log`, credentials);
  }

  getLoggedInDriverId(): Observable<number> {
    // Make an API call to retrieve the logged-in patient ID
    return this.http.get<number>(`${this.apiUrl}/driver/:id`);
  }

}
