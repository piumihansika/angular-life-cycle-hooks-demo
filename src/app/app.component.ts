import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name:string;
  showUserDetails: boolean;
  btnText: string;
  constructor() {
    this.showUserDetails = false;
    this.btnText = 'Show';
  }
  
  toggleUserDetails(){
    this.showUserDetails = !this.showUserDetails;
    this.btnText = this.showUserDetails ? 'Hide' : 'Show';
  }
}
