// What is Redux?
// Redux is a state management library for JavaScript applications, commonly used with React. It helps manage the state of an application in a predictable way by using a single source of truth (the store) and enforcing unidirectional data flow.

// Core Concepts of Redux:
// 1. Store: The store is a single JavaScript object that holds the entire state of the application. It is created using the createStore function from Redux.
import { createStore } from 'redux';

// 2. Actions: Actions are plain JavaScript objects that describe an event or change in the application. They must have a type property, which is a string that indicates the type of action being performed. They can also have an optional payload property that carries additional data.
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const incrementAction = () => ({ type: INCREMENT, payload: 1 });
const decrementAction = () => ({ type: DECREMENT, payload: 1 });

// 3. Reducers: Reducers are pure functions that take the current state and an action as arguments and return a new state. They specify how the state changes in response to actions.

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
        return { count: state.count + action.payload };
    case DECREMENT:
        return { count: state.count - action.payload };
    default:
        return state;
  }
}

// Application uses the useDispatch Hook and this is used to dispatch actions. Actions pass the current state to the reducer, which then returns a new state based on the action type.

// This action is then transfered to the reducer, which then perform the particular operation and returns the new state.

// The store will comprise of the store, actions and reducers.
const store = createStore(counterReducer, initialState, applyMiddleware(...middleware));

// It is preferred to create the store inside the src directory in the React Project.

// In the older versions of redux, we used to use Provider in our App.js and provide a store for the same.

// To see the redux, we used to install npm i redux-devtools-extension and then import composeWithDevTools from the same and then use it while creating the store.

// What is redux thunk middleware and how to use it?
// Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action. This is useful for handling asynchronous operations, such as API calls, in Redux.

import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [thunk];
const storeWithMiddleware = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);



// Start From 14:00 Mins.