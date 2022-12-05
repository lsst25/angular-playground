import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfVsHostComponent } from "./self-vs-host/self-vs-host.component";
import { IncludePathsComponent } from "./include-paths/include-paths.component";
import { DynamicFormExampleComponent } from "./dynamic-form-example/dynamic-form-example.component";

const routes: Routes = [
  { path: 'self-vs-host', component: SelfVsHostComponent },
  { path: 'include-paths', component: IncludePathsComponent },
  { path: 'dynamic-form', component: DynamicFormExampleComponent },
  { path: '**', redirectTo: 'self-vs-host' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
