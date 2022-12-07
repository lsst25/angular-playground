import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsedComponentComponent } from './used-component/used-component.component';
import { UnusedComponent } from './unused/unused.component';



@NgModule({
  declarations: [
    UsedComponentComponent,
    UnusedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      UsedComponentComponent,
      UnusedComponent
  ]
})
export class SomeLibModule { }
