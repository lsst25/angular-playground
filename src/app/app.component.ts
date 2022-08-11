import {Component} from '@angular/core';
import {DependencyService} from "./dependency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DependencyService]
})
export class AppComponent {}
