import { ActionTypes } from './app.actions';
import { Todo } from '../todo.model';
import { FilterState } from '../filter-state.enum';
import { Action, combineReducers } from '@ngrx/store';
import { reducerFactory } from './reducer-factory';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';

import { createSelector } from 'reselect';

export interface IAppState {
  readonly todos?: Todo[];
  readonly filterState?: FilterState;
}

export const initialState: IAppState = {
  todos: [],
  filterState: FilterState.Default
};

export const map: { [key: string]: (payload: any, state: IAppState) => IAppState} = {
  [ActionTypes.SAVE_TODO]: function(payload: { todo: Todo }, state: IAppState) {
    const newState: IAppState = {
      todos: state.todos.concat(payload.todo)
    };
    return Object.assign({}, state, newState);
  },
  [ActionTypes.TODO_TOGGLE]: function(payload: { id: number }, state: IAppState) {
    const todosUpdated = state.todos.map(t => {
      if (t.id !== payload.id) return t;
      return Object.assign({}, t, { checked: !t.checked });
    });
    const newState: IAppState = {
      todos: todosUpdated
    };
    return Object.assign({}, state, newState);
  },
  [ActionTypes.SET_FILTER]: function(paylaod: { filterState: FilterState }, state: IAppState) {
    const newState: IAppState = {
      filterState: paylaod.filterState
    };
    return Object.assign({}, state, newState);
  }
};

export function todoReducer(state, action) {
  const todoReducer = reducerFactory(initialState, map);
  return todoReducer(state, action);
  // const customRouterReducer = function(theState, theAction) {
  //   console.log(theAction, 'routerReducer');
  //   return routerReducer(theState, theAction);
  // };
  // return combineReducers({ todo: todoReducer, router: customRouterReducer })(state, action);
}


export const getTodos = (state: IAppState) => state.todos;
export const getFilterState = (state: IAppState) => state.filterState;

export const getFilteredTodos = createSelector(getTodos, getFilterState, (todos: Todo[], filterState: FilterState) => {
  let result;
  switch (filterState) {
    case FilterState.Default:
      result = todos.filter(t => !t.checked);
      break;
    case FilterState.CompletedOnly:
      result = todos.filter(t => t.checked);
      break;
    case FilterState.All:
      result = todos;
      break;
  }
  return result;
});
