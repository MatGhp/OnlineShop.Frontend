import {Injectable} from '@angular/core';
import {User} from "./models";

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor() {
  }

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
      console.log(error);
      // var errorCode = error.code;
      // var errorMessage = error.message;

    });
  }


}
