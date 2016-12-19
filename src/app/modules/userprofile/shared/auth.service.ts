import {Injectable} from '@angular/core';
import {User} from "./models";
import {Router} from "@angular/router";
import {Subject, Observable} from "rxjs";

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
      console.log(error);
      // var errorCode = error.code;
      // var errorMessage = error.message;

    });

  }


  signinUser(user: User){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  isAuthenticated() : Observable<boolean>{
    const subject  = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(
      function(user){
        if(user){
          subject.next(true);
        }
        else{
          subject.next(false);
        }
      }
    );
    return subject.asObservable();
    // var userprofile = firebase.auth().currentUser;
    //
    // if (userprofile) {
    //   console.log(' User is signed in');
    // } else {
    //   console.log('No userprofile is signed in');
    // }
  }
  signout(){
    firebase.auth().signOut()
      .then(function() {
        console.log('Sign-out successful');
        this.router.navigate(['/signin']);

    }, function(error) {
        console.log(error);
    });
  }

}
