import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { DynamicFormComponent} from './dynamic-form-example/dynamic-form/dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form-example/dynamic-form-qustion/dynamic-form-question.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DynamicFormExampleComponent } from './dynamic-form-example/dynamic-form-example.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        DynamicFormExampleComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
