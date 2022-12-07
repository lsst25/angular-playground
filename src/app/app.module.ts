import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DynamicFormComponent} from './dynamic-form-example/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent} from './dynamic-form-example/dynamic-form-qustion/dynamic-form-question.component';
import { DynamicFormExampleComponent } from './dynamic-form-example/dynamic-form-example.component';
import { ChildComponent } from './self-vs-host/child/child.component';
import { SelfVsHostComponent } from './self-vs-host/self-vs-host.component';
import { IncludePathsComponent } from './include-paths/include-paths.component';
import { DirDirective } from './self-vs-host/dir.directive';
import { ParentDirDirective } from './self-vs-host/parent-dir.directive';
import { SomeLibModule } from "./tree-shaking-example/some-lib/some-lib.module";
import { TreeShakingExampleComponent } from './tree-shaking-example/tree-shaking-example.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        DynamicFormExampleComponent,
        ChildComponent,
        DirDirective,
        ParentDirDirective,
        SelfVsHostComponent,
        IncludePathsComponent,
        TreeShakingExampleComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SomeLibModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
