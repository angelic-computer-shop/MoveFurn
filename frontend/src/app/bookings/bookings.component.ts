
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Bookings } from '../models/bookings';
import { FormControl,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit{

  fb!:FormGroup;
  bookings!:Bookings;
  pick!:string
  drop!:string; 
 cellno!:number;
 altno!:string;
 licenseno!:string;
 noitems!:string;
  need!:string;

        constructor(
          private usersService: UsersService,
          private router: Router,
          
          
          ) { }
      
          ngOnInit(){
      
            this.fb = new FormGroup({
      
              pick: new FormControl(null,[Validators.required,Validators.min(3)]),
        drop:new FormControl(null,[Validators.required,Validators.min(3)]),
              idno:new FormControl(null,[Validators.required,Validators.maxLength(13)]),
              altno:new FormControl(null,[Validators.required,Validators.min(3)]),
              licenseno:new FormControl(null,[Validators.required,Validators.min(3)]),
              cellno:new FormControl(null,[Validators.required,Validators.maxLength(10)]),
              noitems:new FormControl(null,[Validators.required,Validators.min(3)]),
              need:new FormControl(null,[Validators.required,Validators.min(3)]),
      
      
            });
          }
      

 

}
