import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {

  constructor(public messageservice: MessageService) {}

  decline() {
    // Add your code to handle the decline action here
    console.log('Decline button clicked');

    // Store the result
    const result = 'Declined on ' + new Date().toLocaleString();
    this.messageservice.addResult(result);
  }


}
