import { Action } from '@ngrx/store';

export function reducerFactory<State>(initialState: State, map: { [key: string]: (payload: any, state: State) => State } ) {
  return function reducer(state = initialState, action: Action) {
    return map[action.type] && map[action.type](action.payload, state) || state;
  };
};

