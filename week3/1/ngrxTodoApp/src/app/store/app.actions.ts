import { Action } from '@ngrx/store';
import { FilterState } from '../filter-state.enum';
import { Todo } from '../todo.model';

export const ActionTypes = {
  SAVE_TODO: '[App] Save Todo',
  TODO_SAVED: '[App] Todo Saved',
  TODO_TOGGLE: '[App] Todo Toggle',
  TODO_TOGGLED: '[App] Todo Toggled',
  SET_FILTER: '[App] Set Filter'
};

export class SaveTodoAction implements Action {
  type = ActionTypes.SAVE_TODO;
  constructor(public payload: { todo: Todo }) {}
}

export class CompleteTodoAction implements Action {
  type = ActionTypes.TODO_TOGGLE;
  constructor(public payload: { id: number }) {}
}

export class SetFilterAction implements Action {
  type = ActionTypes.SET_FILTER;
  constructor(public payload: { filterState: FilterState }) {}
}




export class TodoSavedAction implements Action {
  type = ActionTypes.TODO_SAVED;
  constructor(public payload: { todo: Todo }) {}
}

export class TodoCompletedAction implements Action {
  type = ActionTypes.TODO_TOGGLED;
  constructor(public payload: { id: number }) {}
}
