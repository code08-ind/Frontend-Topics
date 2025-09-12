// this keyword (Implicit Binding)

// In Global context, this will point to the global context.

// In the function, this will point to the parent of the function which is the Global context.

// For arrow functions, this will point to the parent of the function when the function is in global context.

// this inside the normal function inside the object points to the normal object as the immediate parent.

// this inside the arrow function inside the object points to parent function of the arrow function, if we don't have the parent function, so it will point to the window object. 

// this inside the class or constructor points to the variable fully inside the class.

// this will never point to the function or the setTimout callback

// Interview Question
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

// this can be improved to get the result using
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

// as ref points to the parent of the object, it will point to the parent object, 
console.log(user.ref);

// but now if we can get the name itself using the
console.log(user.ref().name);

const users = {
    name: "Aryan",
    logUser() {
        console.log(this.name);
    }
};

// here now it just copies this method as a callback so now it does not have the access to the object, so it will not show anything as it points to the window object.
setTimeout(users.logUser, 1000);

// solution
setTimeout(function () { users.logUser() }, 1000);

// make a calculator object here
let obj = {
    read() {
        this.a = +prompt("a= ", 0);
        this.b = +prompt("b= ", 0);
    },
    add() {
        return this.a + this.b;
    },
    multiply() {
        return this.a * this.b;
    }
};

obj.read();
console.log(obj.add());
console.log(obj.multiply());

// what will be printed?
var length = 4;

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    // this fn will point to the global object so it will print 4
    methods(fn) {
        fn();
    },
    // now here the parent of the arguments[0] is array itself and now it will show length property printed inside the array which is present in the prototype.
    methodss() {
        arguments[0];
    }
}

object.methods(callback, 2, 3);

// implement calc
const calc = {
    total: 0,
    add(init) {
        this.total += init;
        return this;
    },
    subtract(init) {
        this.total -= init;
        return this;
    },
    multiply(init) {
        this.total *= init;
        return this;
    }
}

const result = calc.add(10).multiply(20);
console.log(result.total);
