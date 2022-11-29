import {Component, Host, OnInit, Optional} from '@angular/core';
import {DependencyService} from "../self-vs-host/dependency.service";

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
