import { Component } from '@angular/core';
import {AppRoutes} from "../app-routing.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly appRoutes = AppRoutes;
}
