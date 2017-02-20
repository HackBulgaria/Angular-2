import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { todoReducer } from './store/app.reducer';

// import { appStore } from './store/index';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppModel } from './store/app.model';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoEditComponent,
    TodoFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(todoReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [ AppModel ],
  bootstrap: [AppComponent]
})
export class AppModule { }

