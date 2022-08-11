import {Component, Host, OnInit, Optional, Self} from '@angular/core';
import {DependencyService} from "../dependency.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit{
  constructor(@Host() @Optional() private dep: DependencyService) {
  }

  ngOnInit() {
    if (this.dep) {
      console.log('dep in Child component is: ',this.dep.exists)
      return;
    }
    console.log('dep in Child component is: ', this.dep)
  }

}
