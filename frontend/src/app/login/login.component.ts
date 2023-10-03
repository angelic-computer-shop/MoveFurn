import { Component, OnInit } from '@angular/core';

import { SessionsService } from 'src/app/services/sessions.service';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Drivers } from '../models/drivers';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  fb!: FormGroup;
  email!: string;
  password!:string;
  selectedUserType: string = 'user';

  constructor(
    private auth: AuthService,
    private router: Router,
    private formB: FormBuilder,
    private session: SessionsService
  ) {
    this.fb = this.formB.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit() {

    this.onLogin();
  }

  onLogin() {
    


    if (this.selectedUserType === 'user') {
      // User login logic
      if (this.fb.valid) {
        // Form is valid, perform login logic
        this.auth.login(this.fb.value).subscribe(res => {
          console.log('success' + res);
          this.router.navigate(['/bookings']);
          this.session.saveLoggedUser(res);
  
        });
      } 
    } else if (this.selectedUserType === 'admin') {
      // Admin login logic
      if (this.fb.valid) {
        // Form is valid, perform login logic
        this.auth.login(this.fb.value).subscribe(res => {
          console.log('success' + res);
          this.router.navigate(['/viewbookings']);
          this.session.saveLoggedUser(res);
  
        });
      } else {
        console.log('Wrong credentials');
      }
      
    }
    else {
      console.log('Wrong credentials');
    }

  }

  
}
