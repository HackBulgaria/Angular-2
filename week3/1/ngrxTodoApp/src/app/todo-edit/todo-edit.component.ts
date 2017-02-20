import { Component, OnInit } from '@angular/core';
import { AppModel } from '../store/app.model';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  constructor(private appModel: AppModel) { }

  ngOnInit() {
  }

  addTodo(text: string) {
    this.appModel.addTodo(new Todo(text));
  }
}
