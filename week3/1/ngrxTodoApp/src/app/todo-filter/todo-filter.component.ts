import { Component, OnInit } from '@angular/core';
import { AppModel } from '../store/app.model';
import { FilterState } from '../filter-state.enum';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements OnInit {

  constructor(private model: AppModel) { }

  ngOnInit() {
  }

  setFilterState(filterState: FilterState) {
    this.model.setFilter(filterState);
  }

}
