import { Component } from '@angular/core';
import {AppRoutes} from "../app-routing.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly appRoutes = AppRoutes;

  readonly navigation = [
    { route: this.appRoutes.SELF_VS_HOST, title: 'Self vs Host' },
    { route: this.appRoutes.INCLUDE_PATHS, title: 'An includePaths use' },
    { route: this.appRoutes.DYNAMIC_FORM, title: 'Dynamic form example' },
    { route: this.appRoutes.TREE_SHAKING, title: 'Tree shaking example' },
    { route: this.appRoutes.DOM_MANIPULATIONS, title: 'DOM manipulations' },
  ]
}
