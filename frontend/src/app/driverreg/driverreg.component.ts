import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Drivers } from '../models/drivers';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-driverreg',
  templateUrl: './driverreg.component.html',
  styleUrls: ['./driverreg.component.scss']
})
export class DriverregComponent implements OnInit{

  fb!:FormGroup;
  drivers!:Drivers;
  name!:string
  surname!:string;
        idno!:number;
        trucktype!:string;
        licenseno!:string;
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
        trucktype:new FormControl(null,[Validators.required,Validators.min(3)]),
        licenseno:new FormControl(null,[Validators.required,Validators.min(3)]),
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
      this.registerDriver();
        }

        registerDriver()
        {
                       this.usersService.createDriver(this.fb.value).subscribe(res=>{
   this.drivers=res;
              console.log(res);
          
                       
            });
            this.router.navigate(['/login']); 
              
                console.log("Register successful");       
                   

            
          }
        }
      
    


