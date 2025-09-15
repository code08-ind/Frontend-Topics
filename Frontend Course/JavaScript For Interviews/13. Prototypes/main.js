// Prototypes

// We can get the prototype using the methods such as: Object.prototype, obj.__proto__, 

// Everything in JS is an object. Even a prototype has a prototype which is an object prototype.

// We can also assign a key to function as well.

// If the function or key is not found in the main prototype, it goes to the child prototype which is called as prototype chaining.

// We can have this prototype inheritance used here in the objects by defining child objects from the parent class. We can create a prototype for the child from the parent using Child.prototype = Object.create(Parent).

// Likewise we can add the methods or functions to the prototypes of the object or the array as we demoed by making polyfills for the methods or by making polyfills for the methods present for the function object.

// Explain the difference between __proto__ and prototype in JavaScript.

// What is setPrototypeOf? We can set the prototype of an object with another object type.

// We can check if an object is the instance of the data type: Array or any object etc.

// How to create an object without the prototype? let obj1 = Object.create(null);

// Deep Clone an object
var obj2 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
}

// This will change the values as they are used by reference. We want that object is copied fully and not by reference.
var clonedObj = obj2;
clonedObj.a = 3;

// This deep clone can be carried out using the structuredClone(obj2), i.e it is an inbuilt method. Deep clone of the object doesn't change the original object even if the value inside clonedObject is changed.

// We can create our own function here for deep clone.
function deepClone(obj) {
    // Handle null and non-object types
    if (obj === null || typeof obj !== 'object') return obj;

    // Create a new object or array based on the type of the input object
    let clone = Array.isArray(obj) ? [] : {};

    // Iterate through each key in the input object
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}
