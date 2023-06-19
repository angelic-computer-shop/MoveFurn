import { Component, OnInit } from '@angular/core';


import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Drivers } from '../models/drivers';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{

  fb!:FormGroup;
  email!:string;



  constructor(
    private auth: AuthService,
    private router: Router,
    private formB : FormBuilder,
   // private users: UsersService
   )
    {
this.fb=this.formB.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required]],

  
});

    }
    ngOnInit(){

     
     {
      this.onLogin()
     }

     
     

    }

     onLogin() {
   
     

        if (this.fb.valid) {       // Form is valid, perform login logic      
        this.auth.login(this.fb.value).subscribe(res=>{
          this.router.navigate(['/viewbookings']); 
        
          console.log("success");       
        const user = { email: this.email };      
        

           

        localStorage.setItem('currentUser', JSON.stringify(user));             })  
       
      
     } 
     else {
      console.log("Wrong credentials");
     }
  }

}




