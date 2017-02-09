import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClockComponent } from './clock.component/clock.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ClockComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
