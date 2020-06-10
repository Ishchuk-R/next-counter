import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const INCREMENT = 'COUNTER_INCREMENT';
const DECREMENT = 'COUNTER_DECREMENT';

/* Action creators */
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const asyncIncrement = () => ((dispatch) => {
  setTimeout(() => {
    dispatch({ type: INCREMENT });
  }, 1000);
});


/* Selectors */
export const counter = (state: number) => state;


const rootReducer = (state = 0, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
