// Most Asked Questions

// 1. What is React and why it is used?
// - React is a popular JavaScript library used for building user interfaces (UIs) for web applications.
// - It's known for its efficiency, flexibility, and reusability in create interactive UI components.
// - React allows developers to build complex UIs by breaking them down into smaller, reusable pieces called components.
// - These components can manage their own state, making it easier to build and maintain large-scale applications.

// 2. What is JSX and why it us used?
// - JSX Is JavaScript XML and help us to write the HTML like code in JS.

// 3. What is React Component?
// - It is a reusable building block for the UI.
// - It can be a class or a function that returns JSX.

// 4. What is difference between state and props?
// - State is something that is used in the component itself. Props are the states that are sent from the parent to the child. Props can only be changed by the parent component.
// - State is mutable and is managed by the component itself, but props are not mutable and can only be changed by the parent component.
// - Components own and manage their own state, while props are owned and managed by the parent component.
// - Usage: The state is used by the component.

// 5. What is prop drilling?
// - Process of passing down props through multiple levels of nesyed components.

// 6. What is React fragment?
// - React fragment is a way to group multiple elements without adding an extra HTML element to the DOM.

// 7. How do you define and use state in a React Fuctional Component? How are they different from normal variables?
// - State is useful for the re-rendering the components. 
// - There is separate system of declaring and using the states by using class components. Inside the render function, we render our details there.

// 8. How to pass the props to a functional component?

// 9. What are prop types?
// - This is package in npm: prop-types. It tells us the types of the props we are using in here.
// - We can get the props by using the this.props.`prop-name`

// 10. Reconciliation vs Rendering
// - Reconciliation: It is the process of computing the diff between 2 Virtual DOMs.
// - Rendering: It is the actual updation of the information when the component is rendered in the rendering environment.

// 11. Application of the map, filter and reduce in the React using the objects.

// 12. What is the difference between the && and || operatores.
// - This is a logical operator used here.

// 13. What is the difference between .? and ?? 
// - ?.: It is called as conditional rendering operator. It is highly used to check if the key of the object exists or not.
// - ??: It is used in rendering if we have a value in user display it otherwise display default value. user??"Hello"

// Printed Unique Names.
const names = ["Alice", "Bob", "Alice", "Charles", "Thomas"];

const newArray = names.filter((name, index) => names.indexOf(name) === index);

console.log(newArray);
 


