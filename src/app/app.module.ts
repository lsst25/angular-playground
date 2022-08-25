import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SomeLibModule} from "./some-lib/some-lib.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SomeLibModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
