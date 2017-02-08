import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { FilterState } from './enums/filter';

const todoFiltersMap: {[key: number]: (todo?: Todo) => boolean } = {
  [FilterState.All]: (): boolean => true,
  [FilterState.Default]: (todo: Todo): boolean => !todo.isChecked,
  [FilterState.CompletedOnly]: (todo: Todo): boolean => !!todo.isChecked
};

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <add-todo (newTodo)="newTodoHandler($event)"></add-todo>
  <filter [state]="filterState" (stateChange)="stateChangeHandler($event)"></filter>
  <todo-list [list]="todoList"></todo-list>
  `,
})
export class AppComponent  {
  title = 'TODO APP';
  todos: Todo[] = [];
  filterState: FilterState = FilterState.Default;

  newTodoHandler(todo: Todo) {
    this.todos.push(todo);
  }

  stateChangeHandler(state: FilterState) {
    this.filterState = state;
  }

  private get todoList(): Todo[] {
    return this.todos.filter(todoFiltersMap[this.filterState]);
  }
}
