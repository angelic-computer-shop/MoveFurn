import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { loggedUser } from '../models/loggedUser';
import { tap, delay } from 'rxjs/operators';
import { Drivers } from '../models/drivers';
import { Users } from '../models/users';





import { Router } from '@angular/router';


import { Bookings } from '../models/bookings';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService  {

private apiUrl = 'http://localhost:9000';


  
  constructor(private http: HttpClient) {}
  accessToken: any;
  user!: loggedUser;
  private userRole: string | null = null;
 

  private isAuthenticateds = false;

  isAuthenticated(): boolean {
    // Retrieve the JSON-formatted string from sessionStorage
    this.accessToken = sessionStorage.getItem('loggedUser');
    return this.isAuthenticateds;
    
  

  if (this.accessToken) {
    // If accessToken is not null or undefined, parse it to get the user object
    this.user = JSON.parse(this.accessToken) as loggedUser;
    const accessTokenValue = this.user.token;

    // Check if the user has a valid access token
    return !!accessTokenValue;
  } else {
    // If accessToken is null or undefined, the user is not authenticated
    return false;
  }

  }
  
//Register as a driver

  register(drivers:Drivers): Observable<any> {
    return this.http.post(`${this.apiUrl}/driver`,drivers);
     }
  //register as a user

  registers(users:Users): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`,users);
     
      }

  //book a truck

  book(bookings:Bookings): Observable<any> {
    return this.http.post(`${this.apiUrl}/book`,bookings);
     
 }

 loginss(credentials: { email: string, password: string }): Observable<any> {
  return this.http.post(`${this.apiUrl}/API/driving`, credentials).pipe(
    catchError((error: HttpErrorResponse) => {
      // Handle the error here or rethrow it to be caught by the component.
      return throwError(error.error.message);
    })
  );
}

  login(credentials: { email: string, password: string }): Observable<any> {
    this.isAuthenticateds = true;
   // this.userRole = role || '';
    
    return this.http.post(`${this.apiUrl}/auth/log`, credentials);
    
  }
  logout() {
    // Implement your logout logic here
    this.isAuthenticateds = false;
    this.userRole = null;
  }

  logins(username: string, password: string): boolean {
    if (username === 'admin' && password === 'adminpass') {
      localStorage.setItem('userRole', 'admin');
      return true;
    } else if (username === 'customer' && password === 'customerpass') {
      localStorage.setItem('userRole', 'customer');
      return true;
    } else {
      return false;
    }
  }

  logouts() {
    localStorage.removeItem('userRole');
  }

  getUserRoles(): string | null {
    return localStorage.getItem('userRole');
  }

  getUserRole() {
    return this.userRole;
  }

  getLoggedInDriverId(): Observable<number> {
    // Make an API call to retrieve the logged-in patient ID
    return this.http.get<number>(`${this.apiUrl}/driver/:id`);
  }

  

}
