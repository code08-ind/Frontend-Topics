console.log("Hello From JS");

// Lexical Scope
// What is a closure?
// Closure Scope Chain
// Time Optimization
function find() {
    let a = [];
    for (let i = 0; i < 10000; i++) {
        a[i] = i * i;
    }

    return function (index) {
        console.log(a[index]);
    }
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");

// We will be using the var here itself for the timeout. Without using any let we have made possible that the we can use a different memory in altogether.
for (var i = 0; i < 3; i++) {
    function inner(i) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }

    inner(i);
}

// By using closures, we can access the private counter and update it etc.

// Module Pattern
var Module = (function () {
    function privateMethod() {
        // do something
    }

    return {
        publicMethod: function () {
            // we can call privateMethod
        },
    };
})();

// Make a function run once
let view;
function fxnCall() {
    let called = 0;

    return function () {
        if (called > 0) console.log("Already Called");
        else {
            console.log("Function Call");
            called++;
        }
    }
}

let isCalled = fxnCall();
fxnCall();
fxnCall();

// Once Polyfill
function once(func, context) {
    let ran;

    return function () {
        if (func) {
            ran = func.apply(context || this, arguments);
            func = null;
        }
        return ran;
    };
}

// Memoize Polyfill
function memoize(func, context) {
    const res = {};

    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = find.call(context || this, ...args);
        }
        return res[argsCache];
    };
}

// Closure vs Scope