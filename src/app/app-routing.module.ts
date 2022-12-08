import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfVsHostComponent } from "./self-vs-host/self-vs-host.component";
import { IncludePathsComponent } from "./include-paths/include-paths.component";
import { DynamicFormExampleComponent } from "./dynamic-form-example/dynamic-form-example.component";
import { TreeShakingExampleComponent } from "./tree-shaking-example/tree-shaking-example.component";
import {DomManipulationsComponent} from "./dom-manipulations/dom-manipulations.component";

export enum AppRoutes {
  SELF_VS_HOST = 'self-vs-host',
  INCLUDE_PATHS = 'include-paths',
  DYNAMIC_FORM = 'dynamic-form',
  TREE_SHAKING = 'tree-shaking',
  DOM_MANIPULATIONS = 'dom-manipulations',
}

const routes: Routes = [
  { path: AppRoutes.SELF_VS_HOST, component: SelfVsHostComponent },
  { path: AppRoutes.INCLUDE_PATHS, component: IncludePathsComponent },
  { path: AppRoutes.DYNAMIC_FORM, component: DynamicFormExampleComponent },
  { path: AppRoutes.TREE_SHAKING, component: TreeShakingExampleComponent },
  { path: AppRoutes.DOM_MANIPULATIONS, component: DomManipulationsComponent },
  { path: '**', redirectTo: 'self-vs-host' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
