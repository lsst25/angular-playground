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
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
