console.log("Hello From JS");

// Currying: We make use of the closures.
// We can explain in depth the function here
// Infinite Currying: 

function add(a) {
    return function () {
        if (b) return add(a + b);
        return a;
    };
}

console.log(add(5)(4)(3)(2)(1)());

// Currying vs Partial Application
// Partial Application has less number of functions for same number of args
// We can use the Currying inside the DOM Manipulation
function updateElementText(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content
    }
}

const updateHeader = updateElementText("heading");
updateHeader("Hello World");

// Curry Implementation
function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            };
        }
    };
}

const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(1)(6)(5)(6));