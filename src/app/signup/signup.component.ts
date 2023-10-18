import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
  isSignedIn = false;
  /*user: string = '';
  email: string = '';
  password: string = '';*/
  //myForm!: FormGroup;

  constructor(/*private fb: FormBuilder,*/public firebaseService: FirebaseService){
    /*this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });*/
  }


  ngOnInit(){
    /*if(localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }*/

    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }

  }
  /*async onSignup(formData: any) {
    const { name, email, password } = formData;
    await this.firebaseService.signup(name, email, password);
  
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
    }*/
  async onSignup(user:string,email:string,password:string){
    await this.firebaseService.signup(user,email,password)
    
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn=true;

  }
}


