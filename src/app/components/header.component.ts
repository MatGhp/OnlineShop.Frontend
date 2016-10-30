import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'os-header',
  templateUrl: './header.component.html',
  styles: [`#login-nav input { margin-bottom: 15px;`]
})
export class HeaderComponent implements OnInit {
  @ViewChild('InputForm') inputForm: HTMLFormElement;

  constructor() {
  }


  formClick(e) {
    e.stopPropagation();
  }

  ngOnInit() {
  }

}
