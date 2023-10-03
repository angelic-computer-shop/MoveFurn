import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from './services/sessions.service';


import { UsersService } from './services/users.service'


import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',

  template: `
  <div *ngIf="UsersService.isLoggedIn()">
    <!-- Your application content here -->
    <button (click)="logout()">Logout</button>
  </div>
  <div *ngIf="!UsersService.isLoggedIn()">
    <!-- Show login page or redirect to login page -->
  </div>`,

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user!: any;
  

  constructor(private router: Router,private authService: AuthService, private usersService: UsersService,
   
    private session: SessionsService,
    ) {}

  ngOnInit() {
    // Retrieve the user data from session storage
    this.user = this.session.getLoggedUser();
    
    

    // Check if the user variable contains valid user data before initializing the form
   
  }

  

  logout() {
    // Call the logout method from the AuthService
    this.authService.logout();

    // Redirect to the login page or any other desired route
    this.router.navigate(['/login']);
  }
}
