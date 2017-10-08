import { Injectable } from '@angular/core';
import * as firebase from 'firebase/firebase';


@Injectable()
export class AuthData {

  constructor() {
    
  }

  loginUser(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

  signupUser(email: string, password: string): firebase.Promise<any> {
    return firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
    .then( newUser => {
        firebase
    .database()
    .ref('/userProfile')
    .child(newUser.uid)
        .set({ email: email });
  });
}

resetPassword(email: string): firebase.Promise<void> {
  return firebase.auth().sendPasswordResetEmail(email);
}

logoutUser(): firebase.Promise<void> {
  return firebase.auth().signOut();
}



}