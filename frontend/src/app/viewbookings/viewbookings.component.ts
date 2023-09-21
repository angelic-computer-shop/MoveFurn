import { environment } from '../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Bookings } from '../models/bookings';
import * as mapboxgl from 'mapbox-gl';
import { UsersService } from '../services/users.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.scss']
})
export class ViewbookingsComponent implements OnInit {
 
  data: any[] = []; 

  
 // map: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/streets-v11';
  // lat = 37.75;
  // lng = -122.41;
  // constructor() { }
  // ngOnInit() {
  //   mapboxgl.accessToken = environment.mapbox.accessToken;
    
  //     this.map = new mapboxgl.Map({
  //       container: 'map',
  //       style: this.style,
  //       zoom: 13,
  //       center: [this.lng, this.lat]
  //   });
  //   // Add map controls
  //   this.map.addControl(new mapboxgl.NavigationControl());
  // }


  constructor(private usersService: UsersService, public messageservice: MessageService) {}


  ngOnInit(): void {

    this.usersService.getBooking().subscribe((response) => {
      // Map the response data to extract id, pick, and drop etc
      this.data = response.map((user: any) => {
        console.log(response);
        
        return {
          id:user.id,
          pick: user.pick,
          drop: user.drop,
        
          noitems: user.noitems,
          need: user.need
        };
      });
    });
  }

  decline() {
    // Add your code to handle the decline action here
    console.log('Decline button clicked');

    // Store the result
    const result = 'Declined on ' + new Date().toLocaleString();
    this.messageservice.addResult(result);
  }

  approve() {
    // Add your code to handle the approval action here
    console.log('Approve button clicked');

    // Store the result
    const result = 'Approved on ' + new Date().toLocaleString();
    this.messageservice.addResult(result);
  }

  }


