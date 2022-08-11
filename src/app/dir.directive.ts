import {Directive, Host, HostListener, OnInit, Optional, Self} from '@angular/core';
import {DependencyService} from "./dependency.service";

@Directive({
  selector: '[appDir]',

})
export class DirDirective implements OnInit {
  @HostListener('click') onClick() {
    console.log('click')
  }

  constructor(@Host() @Optional() private dep: DependencyService) { }

  ngOnInit(): void {
    if (this.dep) {
      console.log('dep in appDir is: ',this.dep.exists)
      return;
    }
    console.log('dep in appDir is: ', this.dep)
  }

}
