import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WordComponent } from './components/word.component/word.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ WordComponent],
    bootstrap: [ WordComponent ]
}) export class AppModule {

}