import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.scss']
})
export class UserregComponent implements OnInit{

  fb!:FormGroup;
  users!:Users;
  name!:string
  surname!:string;
        idno!:number;
        address!:string;
       
        cellno!:number;
        email!:string;
        password!:string;

     
  
  


  constructor(
    private usersService: UsersService,
    private router: Router,
    
    
    ) { }

    ngOnInit(){

      this.fb = new FormGroup({

        name: new FormControl(null,[Validators.required,Validators.min(3)]),
  surname:new FormControl(null,[Validators.required,Validators.min(3)]),
        idno:new FormControl(null,[Validators.required,Validators.maxLength(13)]),
        address:new FormControl(null,[Validators.required,Validators.min(3)]),
       
        cellno:new FormControl(null,[Validators.required,Validators.maxLength(10)]),
        email:new FormControl(null,[Validators.required,Validators.email]),
        password:new FormControl(null,[Validators.required,Validators.min(8),this.passwordValidator]),


      });
    }

    passwordValidator(control:FormControl):{[key:string]:boolean}|null{
      const value : string = control.value;
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasLetter = /[a-zA-Z]/.test(value);

      if (!hasSymbol||!hasNumber||!hasLetter){
        return {invalidPassword:true};
      }
return null;
    }

    onSubmit() {
      this.registerUser();
        }

        registerUser()
        {
                       this.usersService.createUser(this.fb.value).subscribe(res=>{
   this.users=res;
              console.log(res);
          // if(this.fb.valid){
            // this.usersService.createDriver(this.fb.value).subscribe(res=>{
            //   this.drivers=res;
            //   console.log(res);
                       
            });
            this.router.navigate(['/login']); 
              
                console.log("Register successful");       
                   
          }
        }
