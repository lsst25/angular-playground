import { Component } from '@angular/core';
import {DependencyService} from "./dependency.service";

@Component({
  selector: 'app-self-vs-host',
  templateUrl: './self-vs-host.component.html',
  styleUrls: ['./self-vs-host.component.css'],
  providers: [DependencyService]
})
export class SelfVsHostComponent {}
