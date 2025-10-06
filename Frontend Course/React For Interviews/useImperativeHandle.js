// How to pass a function from child component to parent component?

// - useImperativeHandle is the hook used to pass the function from child to parent. We need to pass the ref from the parent component to the child component and this makes sure that that ref is the second param after the props. This ref has the access of the whole child component used and this ref is passed in the useImperativeHandle.

// - useImperativeHandle takes in two args: ref passed from parent to the child and callback passed which has all the things that we want to pass from the child to parent. 

// - We also need to make sure that we need to wrap up our child component function with forwardRef in order to use this hook.