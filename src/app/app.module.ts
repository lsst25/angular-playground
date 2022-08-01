import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DynamicForm} from './dynamic-form/dynamic-form.component';
import {DynamicFormQustionComponent} from './dynamic-form-qustion/dynamic-form-qustion.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        DynamicForm,
        DynamicFormQustionComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
