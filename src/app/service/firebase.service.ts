import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
//import { UserCredential, createUserWithEmailAndPassword, getAuth, Auth, signInWithEmailAndPassword, User, signOut } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 
  isLoggedIn=false;
  constructor(public firebaseAuth: AngularFireAuth) { }
  
  async signin(email: string, password: string) {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password);
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(this.firebaseAuth.currentUser));
    } catch (error) {
      console.error('Firebase Authentication Error:', error);
    }
  }
  async signup(user:string,email: string,password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res=>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user))
      localStorage.setItem('key',user);
     
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
  //constructor(public firebaseAuth: AngularFireAuth) {}

  /*async signin(email: string, password: string): Promise<User | null> {
    try {
      const auth: Auth = getAuth();
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      this.isLoggedIn = true;
      const user: User | null = userCredential.user;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    } catch (error) {
      console.error('Firebase Authentication Error:', error);
      return null;
    }
  }
  async signin(email: string, password: string) {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password);
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(this.firebaseAuth.currentUser));
    } catch (error) {
      console.error('Firebase Authentication Error:', error);
    }
  }*/
  

  /*async signup(name: string, email: string, password: string): Promise<User | null> {
    try {
      const auth: Auth = getAuth();
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      this.isLoggedIn = true;
      const user: User | null = userCredential.user;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('key', name);
      }
      return user;
    } catch (error) {
      console.error('Firebase Signup Error:', error);
      return null;
    }
  }

  logout(): void {
    const auth: Auth = getAuth();
    signOut(auth);
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }*/

  /*getCurrentUser(): User | null {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return user;
  }*/

  
}
  








