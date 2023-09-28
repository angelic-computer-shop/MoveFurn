import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Bookings } from '../models/bookings';
import { SessionsService } from 'src/app/services/sessions.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  fb!: FormGroup;
  id!: BigInteger;
  user!: any;
  bookings!: Bookings;
  pick!: string;
  drop!: string;
  cellno!: number;
  altno!: string;
  licenseno!: string;
  noitems!: string;
  need!: string;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private session: SessionsService,
    private formb: FormBuilder
  ) {}

  ngOnInit() {
    // Retrieve the user data from session storage
    this.user = this.session.getLoggedUser();

    // Check if the user variable contains valid user data before initializing the form
    if (this.user && Object.keys(this.user).length > 0) {
      this.initializeForm();
    } else {
      // Handle the case when the user data is not available
      console.log('User data not found in session storage');
      // You can take appropriate actions, such as redirecting the user to the login page.
    }

    // this.fb = new FormGroup({

    //   pick: new FormControl(null,[Validators.required,Validators.min(3)]),
    //    drop:new FormControl(null,[Validators.required,Validators.min(3)]),
    //    altno:new FormControl(null,[Validators.required,Validators.min(3)]),
    //    cellno:new FormControl(null,[Validators.required,Validators.maxLength(10)]),
    //   noitems:new FormControl(null,[Validators.required,Validators.min(3)]),
    //   need:new FormControl(null,[Validators.required,Validators.min(3)]),

    // });.
  }

  initializeForm() {
    this.fb = this.formb.group({
      pick: ['', Validators.required, Validators.min(3)],
      drop: ['', Validators.required, Validators.min(3)],
      altno: ['', Validators.required, Validators.min(3)],
      cellno: ['', Validators.required, Validators.maxLength(10)],
      noitems: [null, Validators.required, Validators.min(3)],
      need: [null, Validators.required, Validators.min(3)],
      usersid: [this.user.id, Validators.required],
    });
  }

  onSubmit() {
    this.bookingTruck();
  }

  bookingTruck() {
    this.usersService.createBooking(this.fb.value).subscribe((res) => {
      this.bookings = res;
      console.log(res);
    });

    console.log('Booking successful');
  }
}
