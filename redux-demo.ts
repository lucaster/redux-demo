// tsc -w -p .

import { Action, createStore, Reducer } from 'redux';

interface State {
  readonly counter: number;
}

const NULL_STATE: State = {
  counter: 0,
};

const reducer: Reducer<State, Action<'increment'>> = (state, action) => {
  console.debug('reducer is called');
  if (action.type === 'increment') {
    return {
      counter: state ? state.counter + 1 : 0,
    };
  }
  if (state === void 0) {
    return {
      counter: 0
    };
  }
  return {
    ...state
  };
};

// createStore() executes the reducer immediately!
// If not provided to createStore(), the initial state is undefined.
const store = createStore(reducer);

console.log(store.getState());

const subber = () => {
  console.log('subber', store.getState());
};

const unsub = store.subscribe(subber);

store.dispatch({
  type: 'increment'
});

unsub();
