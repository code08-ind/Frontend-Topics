// Custom Hooks
// - A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks.
// - Custom hooks allow you to extract component logic into reusable functions.
// - A custom hook is a mechanism to reuse stateful logic (like setting up a subscription and remembering the current value), but every time you use a custom hook, all state and effects inside of it are fully isolated.
// - Custom hooks are a convention that naturally follows from the design of hooks, rather than a React feature.
// - Custom hooks allow to use lifecycle methods inside functional components and we can avoid prop drilling as well and they preserve the state of the component as well between renders and they use same rules as React hooks that they can't be called inside loops, conditions or nested functions and they can call other hooks as well. These all features make custom hooks a very powerful tool in React intead of using the simple functions.