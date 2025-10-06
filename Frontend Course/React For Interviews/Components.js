// 1. Explain class based components in React.
// - Class based components are ES6 classes that extend from React.Component.
// - They have a render method that returns JSX to be rendered on the UI.
// - They can manage their own state and lifecycle methods.
// - Example:
import React from 'react';

class MyClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    } 

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        );
    }
}

// 2. Explain constructor and super in React class components.
// - The constructor is a special method for creating and initializing an object created with a class.
// - In React class components, the constructor is used to initialize state and bind event handlers.
// - The super keyword is used to call the constructor of the parent class (React.Component).
// - It must be called before using 'this' in the constructor.

// 3. Explain component lifecycle methods
// - Component lifecycle methods are special methods that get called at different stages of a component's life in a React application.
// - Common lifecycle methods include:
//   - componentDidMount: Called after the component is mounted to the DOM.
//   - componentDidUpdate: Called after the component updates due to state or prop changes.
//   - componentWillUnmount: Called just before the component is unmounted and destroyed.
// - These methods allow developers to perform actions at specific points in a component's lifecycle, such as fetching data, updating the DOM, or cleaning up resources. 

// 4. Explain functional components in React.
// - Functional components are simple JavaScript functions that return JSX.
// - They do not have their own state or lifecycle methods (until hooks were introduced).
// - They are easier to read and test, and are often used for presentational purposes.

// 5. What are React Hooks?
// - React Hooks are functions that let you use state and other React features in functional components.
// - Common hooks include useState, useEffect, useContext, useReducer, etc.
// - Hooks allow functional components to have state and side effects, making them more powerful and versatile.
// In useEffect we can use compnentWillUnmount method by returning a function inside it like:
import React, { useState, useEffect } from 'react';

function MyFunctionalComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // ComponentDidMount and ComponentDidUpdate logic here  
        return () => {
            // ComponentWillUnmount logic here
        }
    }, [count]); // Dependency array

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default MyFunctionalComponent;

// 6. What is a children prop?
// - The children prop is a special prop in React that allows you to pass components or elements as children to other components.
// - It is used to create reusable components that can wrap other components or elements.
// - Used as prop.children in the parent component and accessed via props.children in the child component.

// 7. What are Smart/Stateful/Container components?
// - Smart/Stateful/Container components are components that manage state and handle logic.
// - They are responsible for fetching data, managing state, and passing props to presentational components.
// - They often contain lifecycle methods and are typically class-based components (though can be functional with hooks).

// 8. What are Dumb/Stateless/Presentational components?
// - Dumb/Stateless/Presentational components are components that focus on how things look.
// - They receive data and callbacks via props and render UI based on that data.
// - They do not manage their own state or handle logic, making them easier to test and reuse.
// - They are often functional components.

// 9. What is a Higher Order Component (HOC)?
// - A Higher Order Component (HOC) is a function that takes a component and returns a new component.
// - HOCs are used to add common functionality or behavior to multiple components without repeating code.
// - They are often used for cross-cutting concerns like logging, authentication, or theming.
// - It starts with: `with` like withRouter, withAuth etc and it accepts a component as an argument and returns a new component.
// - We can use the Functional Components or Class Components to create HOC.

// 10. What is the difference between a controlled and uncontrolled component?
// - Controlled components are components where the form data is handled by the React component's state.
// - Uncontrolled components are components where the form data is handled by the DOM itself.
// - In controlled components, the value of the input is set by the state and updated via onChange events.
// - In uncontrolled components, you use refs to access the input value directly from the DOM.

// 11. What are Pure Components?
// - Optimize the rendering performance of components by reducing unnecessary re-renders.
// - In class components, you can create a pure component by extending React.PureComponent instead of React.Component.
// - In functional components, you can use React.memo to achieve the same effect outside the Function.

// Start From 05:00 Mins.