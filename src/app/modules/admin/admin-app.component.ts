import {Component} from '@angular/core';

@Component({

  template: `
<div class="row">
<div class="col-md-3"><os-admin-sidebar></os-admin-sidebar></div>
<div class="col-md-9"><router-outlet></router-outlet></div>

</div>
`

})
export class AdminAppComponent {
}
