import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, todoReducer, getTodos, getFilterState, getFilteredTodos } from './app.reducer';
import { Todo } from '../todo.model';
import { Observable } from 'rxjs/Observable';
import { FilterState } from '../filter-state.enum';
import { SaveTodoAction, CompleteTodoAction, SetFilterAction } from './app.actions';

@Injectable()
export class AppModel {
  todos$: Observable<Todo[]>;
  filterState$: Observable<FilterState>;

  constructor(private _store: Store<IAppState>) {
    this.todos$ = this._store.select(s => getFilteredTodos(s));
    this.filterState$ = this._store.select(s => getFilterState(s));
  }

  addTodo(todo: Todo) {
    this._store.dispatch(new SaveTodoAction({ todo }));
  }

  toggleCompleted(todo: Todo) {
    this._store.dispatch(new CompleteTodoAction({ id: todo.id }));
  }

  setFilter(filterState: FilterState) {
    this._store.dispatch(new SetFilterAction({ filterState }));
  }
}

