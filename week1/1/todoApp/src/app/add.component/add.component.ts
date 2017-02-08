import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'add-todo',
  templateUrl: './app/add.component/add.component.html',
  styleUrls: ['./app/add.component/add.component.css'],
})
export class AddComponent  {
  @Output() newTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  add(text: string) {
    this.newTodo.emit(new Todo(text));
  }
}
