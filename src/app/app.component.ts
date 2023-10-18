import { Component } from '@angular/core';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginTask';
  isSignedIn=false;
  
  constructor(public firebaseService: FirebaseService){}

  handleLogout(){
    this.isSignedIn=false;

  } 
  ngOnInit(){
    if(localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }
}