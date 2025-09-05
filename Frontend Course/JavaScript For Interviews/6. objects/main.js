const { use } = require("react");

console.log("Hello From JS");

// We can update the value of a key and we can also delete the key value.
// Q1. 

// It will not delete the local variable and delete is used for the keys in object.
const func = (function (a) {
    delete a;
    return a;
})(5);

console.log(func);

// Dynamic Property Assign in the Object

const property = "firstName";
const name = "Ravi";

const obj = {
    [property]: name,
};

console.log(obj);

// We can loop through the object by using the for in loop.
// If we assign the key another value, then the value will be updated for the key.

// Create a function two multiply the numeric values of the object by two
let nums = {
    a: 100,
    b: 200,
    title: "My Nums"
};

function multiplyByTwo(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

multiplyByTwo(nums)

// JSON.stringify and JSON.parse
// We are using this JSON.stringify in the local storage.
// This will spread all the chars of the string in the array.
console.log([..."aryan"]);

const settings = {
    username: "Piyush",
    level: 19,
    health: 90
}

// It will only stringify the level and health inside the settings object and just return them in string format.
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

// Destructuring in Objects
let user = {
    names: "Ravi",
    age: 26
}

const { names: myName } = user;

console.log(myName);

// We can destructure in the same for the nested objects as well.

// rest operators are used in function declaration and cannot be used in between the params but the spread operator can be used in between the other params as well.

// While copying the objects, we are copying the reference not the values. 

// If we compare the two objects using the == or ===, it will give false and both the objects are in the different memory space.

// If we assign the value of the object inside the array, and if we update the object to null, array will still remain and no null value will be there.

// Copying Objects
function changeNameAge(person) {
    person.age = 25;
    // reassigning will not effect the reference
    person = {
        name: "John",
        age: 30
    };

    return person;
}

const personObj1 = {
    name: "Alex",
    age: 30
}

const personObj2 = changeNameAge(personObj1);
console.log(personObj2);

// Shallow copy and Deep copy of an object

// How to create a deep copy or a clone of the object?
// Method 1
let user1 = { name: "Ravi", age: 24 };
let user2 = Object.assign({}, user1);

// It will not effect the other object user1 when we are changing the user2.
user2.name = "Sham";

// Method 2
const user1Clone = JSON.parse(JSON.stringify(user1))

// Method 3
const user1Clones = { ...user1 };