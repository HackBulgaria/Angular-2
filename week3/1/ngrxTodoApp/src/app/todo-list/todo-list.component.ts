import { Component, OnInit } from '@angular/core';
import { AppModel } from '../store/app.model';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private appModel: AppModel) {
    this.todos$ = appModel.todos$;
  }

  ngOnInit() {
  }

  toggleTodo(todo: Todo) {
    this.appModel.toggleCompleted(todo);
  }
}

