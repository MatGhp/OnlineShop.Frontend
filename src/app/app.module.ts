import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule}   from '@angular/router';

import {AppComponent} from './app.component';


// Eager load these Modules
import {UserModule} from "./modules/userprofile/user.module";
import {HomeComponent} from "./home.component";
import {DoublePipe} from './shared/double.pipe';
import {AngularFireModule} from "angularfire2";
//TODO : Lazy Load these Modules :


export const firebaseconfig = {
  apiKey: "AIzaSyAjbXfgwPfQhs8aHivV1Csb6xivCJqidok",
  authDomain: "webshop-c28bc.firebaseapp.com",
  databaseURL: "https://webshop-c28bc.firebaseio.com",
  storageBucket: "webshop-c28bc.appspot.com",
  messagingSenderId: "240429656607"
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoublePipe


  ],
  imports: [
    BrowserModule,

    FormsModule,
    HttpModule,
    RouterModule,

    UserModule,
    AngularFireModule.initializeApp(firebaseconfig),
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'admin', loadChildren: 'app/modules/admin/admin-app.module#AdminAppModule'},
      {path: '**', redirectTo: 'home'}
    ])

    //MdCoreModule, MdCardModule, MdButtonModule, MdRadioModule,
    //MdCheckboxModule, MdTooltipModule, MdSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
