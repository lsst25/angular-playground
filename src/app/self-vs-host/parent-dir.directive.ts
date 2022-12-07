import { Directive } from '@angular/core';
import {DependencyService} from "./dependency.service";

@Directive({
  selector: '[appParentDir]',
  providers: [DependencyService]
})
export class ParentDirDirective {

  constructor() { }

}
