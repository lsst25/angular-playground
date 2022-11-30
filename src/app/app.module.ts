import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './self-vs-host/child/child.component';
import { DirDirective } from './self-vs-host/dir.directive';
import { ParentDirDirective } from './self-vs-host/parent-dir.directive';
import { AppRoutingModule } from './app-routing.module';
import { SelfVsHostComponent } from './self-vs-host/self-vs-host.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DirDirective,
    ParentDirDirective,
    SelfVsHostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
