import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[osDropdown]'
})
export class DropdownDirective {

  @HostBinding('id') get opened() {
    return this.isCollapse;
  }

  @HostListener('mouseover')  open(){
    this.isCollapse=true;
  }
  @HostListener('mouseleave')  close(){
    this.isCollapse=false;
  }
  private isCollapse = false;

}
