import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-used-component',
  template: `
    <p>
      used-component works!
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
