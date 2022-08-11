import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DirDirective } from './dir.directive';
import { ParentDirDirective } from './parent-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DirDirective,
    ParentDirDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
