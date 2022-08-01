import {Component, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  constructor(private vcr: ViewContainerRef) {}

  ngOnInit(): void {
  }
}
