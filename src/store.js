import { createStore } from 'redux';

// INITIAL STATE
const initialState = {
    player: {
        name: 'Allen',
        age: '29'
    }
}

// Reducer function
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counterReducer, initialState);

export default store;
