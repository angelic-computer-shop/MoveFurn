import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drivers } from '../models/drivers';
import {Users} from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:9000/driver';
  private apiUrls = 'http://localhost:9000/users';


  constructor(private http: HttpClient) { }

  //create driver

  createDriver(drivers:Drivers):Observable<any>{

    return this.http.post(this.apiUrl,drivers);
  }


//create user

createUser(users:Users):Observable<any>{

  return this.http.post(this.apiUrls,users);
}

  getDriverByEmail(email:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/email/${email}`);


    
  }


  
  

  getDriver(){
    return this.http.get(this.apiUrl)
  }
}
