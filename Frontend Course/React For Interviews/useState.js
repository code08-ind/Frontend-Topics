// useState Hook in React

// 1. If we don't have a state, we can still get the previous state in callback function of setState method in functional component like:
// this.setState((prevState) => ({ count: prevState.count + 1 }));
// setCount will be called once whole of the component is rendered. It has an async nature. To fix this, we can pass the callback inside the setCount method like and we can get the state updated quickly.

// 2. What is 2 way data binding and how to achieve it in React?
// - Two-way data binding means that changes in the UI are automatically reflected in the state and vice versa. It allows to keep the syn in the values between the models and the view with state inside it.

// 3. How to have 3 fields in form and have one state to have these values stored in it?
// - We will take an object here to store these values in it and we will use the spread operator to update the state of the object. It can be done by taking the name and value from event.target and using it to update the state of the object like: {...formData, [name]: value}
