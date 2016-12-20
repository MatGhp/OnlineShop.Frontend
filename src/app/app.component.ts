import { Component } from '@angular/core';
import {AngularFire} from "angularfire2";


@Component({
  selector: 'os-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(af: AngularFire)
  {
    console.log(af);
  }
}
