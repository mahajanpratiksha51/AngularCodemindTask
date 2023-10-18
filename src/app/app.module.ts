import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './service/firebase.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    
    SigninComponent,
    SignupComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyBEqPa-30bNEOk0c_2o-9IUzrhs9Cxe8q8",
      authDomain: "fir-angular-auth-b447b.firebaseapp.com",
      projectId: "fir-angular-auth-b447b",
      storageBucket: "fir-angular-auth-b447b.appspot.com",
      messagingSenderId: "423673574241",
      appId: "1:423673574241:web:efb49cc0cd6a6bcba98b20"}),
    AngularFireStorageModule,
    AngularFireModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,   
    
  


  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
