import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): boolean {
    if (email === 'admin' && password === 'adminpass') {
      localStorage.setItem('userRole', 'admin');
      return true;
    } else if (email === 'customer' && password === 'customerpass') {
      localStorage.setItem('userRole', 'customer');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('userRole');
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }
}
