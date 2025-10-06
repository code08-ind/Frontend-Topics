// What is useReducer hook?
// - useReducer is a hook in React that is used for state management in functional components. It is an alternative to the useState hook and is particularly useful when dealing with complex state logic or when the next state depends on the previous state.
// - It is inspired by the Redux library and follows the same principles of reducers and actions. The useReducer hook takes in a reducer function and an initial state as arguments and returns an array containing the current state and a dispatch function to update the state.
// - The reducer function is a pure function that takes in the current state and an action object and returns a new state based on the action type. The dispatch function is used to send actions to the reducer function to update the state.

import React, { useReducer } from 'react';
// Example of useReducer hook
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
}

export default Counter;

// - Dispatch takess two args: the action and the payload if we want to pass one.
// - We use the useReducer hook when we have come state handling logic or When state logic follows a pattern or when multiple actions need to update the state in the predictable way.

// Give an example of useReducer hook in shopping cart?
// - In a shopping cart application, we can use the useReducer hook to manage the cart state, including adding and removing items, and updating item quantities. We can similarly have an initial state and a reducer function to handle different actions related to the cart.