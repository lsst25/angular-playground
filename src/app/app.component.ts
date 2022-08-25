import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>APP COMPONENT</h1>
    <app-used-component></app-used-component>
  `,
})
export class AppComponent {
  title = 'test-project';
}
