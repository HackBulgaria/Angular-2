import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterState } from '../enums/filter';

@Component({
  selector: 'filter',
  templateUrl: './app/filter.component/filter.component.html',
  styleUrls: ['./app/filter.component/filter.component.css']
})
export class FilterComponent  {
  @Input() state: FilterState;
  @Output() stateChange: EventEmitter<FilterState> = new EventEmitter<FilterState>();

  private states: string[] = [];

  constructor() {
    this.states = Object.keys(FilterState).filter(el => isNaN(parseInt(el, 10)));
  }

  stateChanged(stateName: string) {
    this.stateChange.emit(FilterState[stateName]);
  }

  private isActive(stateName: string): boolean {
    return FilterState[stateName] === this.state;
  }
}
