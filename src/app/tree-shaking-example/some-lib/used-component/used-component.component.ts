import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-used-component',
  template: `
    <p class="border p-1">
      This is used-component!
    </p>
  `,
  styles: [
  ]
})
export class UsedComponentComponent implements OnInit {
  public foo = 'Elon Mask..............................'
  constructor() { }

  ngOnInit(): void {
    console.log(this.foo);
  }

}
