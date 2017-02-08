import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ListComponent } from './list.component/list.component';
import { AddComponent } from './add.component/add.component';
import { FilterComponent } from './filter.component/filter.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ListComponent, AddComponent, FilterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
