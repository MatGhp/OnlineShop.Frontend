import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'os-admin-sidebar',
  templateUrl: 'admin-sidebar.component.html',
  styles: [`
body{margin-top:50px;}
.glyphicon { margin-right:10px; }
.panel-body { padding:0px; }
.panel-body table tr td { padding-left: 15px }
.panel-body .table {margin-bottom: 0px}
.active{ color : red}
`]
})
export class AdminSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
