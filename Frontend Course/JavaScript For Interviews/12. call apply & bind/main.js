// Explicit Binding using call, apply and bind

// What is call?

let obj = { name: "Aryan" };

function sayHello() {
    return "Hello " + this.name;
}

console.log(sayHello.call(obj));

// What is apply?
// Same as the call but it takes other params passed to the function in the form of the array.
console.log(sayHello.apply(obj));

// What is bind?
// bind provides us with the another function here and we can use this re-usable function anywhere as well. We can pass the arguments to the main function call with the bind or the function returned by bind function.

const animals = [
    { species: "Lion", name: "King" }, { species: "Whale", name: "Queen" }
];

function printAnimals(i) {
    this.print = function () {
        console.log("#" + i + " " + this.species + ":" + this.name);
    }

    this.print();
}

for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i);
}

// Append an array to an another array
const array = ["a", "b"];
const elements = [0, 1, 2];

array.push.apply(array, elements);

console.log(array);

// Using apply to enhance Built-in Functions
const numbers = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null, numbers));

// bound function
function f() {
    console.log(this); // will print window object
}

let user = {
    g: f.bind(null),
};

// the context is fixed to null, so it will point to window object.
user.g();

// bind chain
function a() {
    console.log(this.name);
}

// The object will remain bound to a object and bind chaining will not work.
a = a.bind({ name: "John" }).bind({ name: "Ann" });

a();

// call, apply and bind are highly useful when working with the this keyword

// We can't manipulate the context of the arrow function as it will point towards its parent normal function and if it is not there it will point to the window object.

// Polyfill for call
Function.prototype.myCall = function (context = {}, ...args) {
    if(typeof this !== 'function'){
        throw new Error("This is not callable");
    }

    // context points to the function we are using
    context.fn = this;

    // call my function here.
    context.fn(...args);
}

// Polyfill for apply
Function.prototype.myApply = function (context = {}, args=[]) {
    if(typeof this !== 'function'){
        throw new Error("This is not callable");
    }

    if(!Array.isArray(args)){
        throw new TypeError("Args passed are not in form of array");
    }

    // context points to the function we are using
    context.fn = this;

    // call my function here.
    context.fn(...args);
}

// Polyfill for bind
Function.prototype.myBind = function (context = {}, args=[]) {
    if(typeof this !== 'function'){
        throw new Error(this+" Cannot be bound as it's not callable");
    }

    context.fn = this;

    return function(...newArgs){
        return context.fn(...args, ...newArgs);
    }
}

