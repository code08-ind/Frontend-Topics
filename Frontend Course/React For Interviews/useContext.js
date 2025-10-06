// What is useContext in React?
// - useContext is a hook in React that allows you to access the value of a context directly in a functional component that is created by the createContext method.
// - It provides a way to share values between components without having to pass props down manually at every level of the component tree and is used where passing props is impractical.

// We need to wrap up our component in the Context Provider to provide the context value to all the components inside it and pass the value to the Provider component. This can be taken from the useContext hook and this can be used in any child component.

// Can we have multiple contexts in a single component?
// - Yes, we can have multiple contexts in a single component. We can use the useContext hook multiple times in a single component to access different context values.