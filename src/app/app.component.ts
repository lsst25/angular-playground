import { Component } from '@angular/core';
import {AppRoutes} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly appRoutes = AppRoutes;
}
