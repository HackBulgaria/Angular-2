import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './components/app.component/app.component';
import { CustomDirectiveModule } from './directives/customDirectives.module';

@NgModule({
    imports: [ BrowserModule, CustomDirectiveModule ],
    declarations: [ App ],
    bootstrap: [ App ]
}) export class AppModule {

}