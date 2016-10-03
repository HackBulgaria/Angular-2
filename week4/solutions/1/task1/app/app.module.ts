import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
 
import { App } from './app.component/app.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule],
    declarations: [ App ],
    bootstrap: [ App ]
}) export class AppModule {

}