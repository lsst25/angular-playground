import {Component, Host, OnInit, Optional} from '@angular/core';
import {DependencyService} from "../dependency.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit{
  constructor(@Host() @Optional() private dep: DependencyService) {
  }

  gotDependency: string = '';

  ngOnInit() {
    if (this.dep) {
      console.log('dep in Child component is: ',this.dep.exists)
      this.gotDependency = 'Got dependency'
      return;
    }
    this.gotDependency = 'Did not get dependency'
    console.log('dep in Child component is: ', this.dep)
  }

}
