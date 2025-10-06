// What is useRef in React?

// useRef is a hook in React that allows you to create a mutable reference that persists across renders. It can be used to store a reference to a DOM element or any mutable value that you want to keep between renders without causing a re-render when it changes.

// The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

// When would you use useRef?
// 1. Accessing DOM elements: You can use useRef to get a reference to a DOM element and manipulate it directly. It can be used to get the value using the ref attribute on the element. We can also add the focus on the element using the ref.current.focus() method.
// 2. Storing mutable values: You can use useRef to store any mutable value that you want to persist across renders without causing a re-render when it changes.
// 3. Keeping track of previous values: You can use useRef to keep track of the previous value of a state or prop.
// 4. Caching values: You can use useRef to cache expensive calculations or API responses to avoid unnecessary re-computations or re-fetching.

// useRef can be used to manipulate any HTML element like input, div, button, etc.




