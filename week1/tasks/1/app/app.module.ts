import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './components/app.component/app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ App ],
    bootstrap: [ App ]
}) export class AppModule {

}