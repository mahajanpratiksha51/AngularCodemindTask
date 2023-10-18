import { Component } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
//import { NgForm } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  //myForm!: FormGroup;  
   isSignedIn=false;
  //errorMessage: string = ''; 

  /*email: string = ''; 
  password: string = ''; */
  errorMessage: string = '';


  constructor(/* private formBuilder: FormBuilder*/public firebaseService: FirebaseService, private router: Router){
   
  }
  ngOnInit() {
    /*this.myForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });*/
  }
   handleLogout(){
    this.isSignedIn=false;
   }
  
  async onSignin(email: string, password: string) {
    try {
      await this.firebaseService.signin(email, password)
      if (this.firebaseService.isLoggedIn) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      this.errorMessage = 'An error occurred during sign-in';
    }

  
  }

 /*onSignin() {
    try {
      this.firebaseService.signin(this.email, this.password);
      if (this.firebaseService.isLoggedIn) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      this.errorMessage = 'An error occurred during sign-in';
    }
  }*/
  /*onSignin() {
    // Handle sign-in here
    const email = this.myForm.get('email')!.value;
    const password = this.myForm.get('password')!.value;

    // Call your authentication service to perform sign-i
    this.firebaseService.signin(email, password)
      .then(() => {
        if (this.firebaseService.isLoggedIn) {
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
        this.errorMessage = 'An error occurred during sign-in';
      });
  }*/
}
