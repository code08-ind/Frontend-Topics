// We need to include

// We will be including the cdn links for the react.

// We can create an element using the React.createElement.

// We also have the various hooks inside it such as useState etc.

// To make run the jsx, we can use babel to run the react syntax to Browser.

// To make jsx run on our system, we will need script type text/babel.

// We can also use eslint to make some rules out of here.

// React is declarative in nature and does not allow to directly interact with the DOM. 

// Rendering Phase in React can be divided into two parts: 
// 1. Render Phase
// 2. Commit Phase

// If a state is changed, the component is re-rendered in the system.

// When a parent component is re-rendered, child components will be re-rendered as well.

// setState() is async in nature and operation is run after whole code is run.

// JSX Code is transpiled back into the React element which can be in some complex structure.

// This React element will be converted to the Virtual DOM. This whole comes under the Render Phase. 

// After this this virtual DOM is published to the actual DOM, and then it called as Commit Phase.

// Diffing Algorithm is used here, if there any changes in the DOM after the element is changed in the virtaul DOM, this whole process is called as Reconcilliation phase which compares the changes between 2 re-renders.

// Value of state using useState hook are maintained over the re-renders.

// Updating the Actual DOM is very costly and it just updates the virtual DOM.

// In the Diffing Algorithm, react assumes that if a tag is updated, everything inside that tag is updated or changed.

// We should have unique keys as it is important for the react elements as the element in the react is having a key and if we don't provide any unique key, it will re-render it in any order and will cause a confusion for React.

// We should avoid using index of map to provide unique keys in the elements to be mapped.