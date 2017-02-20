import { todoReducer } from './app.reducer';

export function appStore(state, action) {
  return {
    todo: todoReducer(state, action)
  };
};
