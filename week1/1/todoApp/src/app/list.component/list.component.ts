import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';
@Component({
  selector: 'todo-list',
  templateUrl: './app/list.component/list.component.html',
  styleUrls: ['./app/list.component/list.component.css']
})
export class ListComponent  {
  @Input() list: Todo[] = [];

}
