import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) {}

  logout() {
    // Clear user authentication state (e.g., remove tokens, clear user data).
    // Example: Remove the authentication token from localStorage.
    localStorage.removeItem('authToken');

    // Navigate the user to the login page or any other desired page.
    this.router.navigate(['/login']);
  }
}
