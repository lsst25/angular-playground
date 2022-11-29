import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SelfVsHostComponent} from "./self-vs-host/self-vs-host.component";

const routes: Routes = [
  { path: 'self-vs-host', component: SelfVsHostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
