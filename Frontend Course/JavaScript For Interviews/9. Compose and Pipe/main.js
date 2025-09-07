// Compose and Pipe
const addFive = (num) => {
    return num + 5;
}

const subtractTwo = (num) => {
    return num - 2;
}

const multiplyFour = (num) => {
    return num * 4;
}

// First it will return 20 which we return to subtractTwo and it will return 18 and go to last function to return 23. The direction is from right to left. compose can take n number of arguments here.
const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5));
// We call this concept as function composition and this is a higher order function.

// Exactly opposite to the compose and direction of execution is from left to right.
const evaluate1 = pipe(addFive, subtractTwo, multiplyFour);
console.log(evaluate1(5));

function compose(...fns){
    return function(init){
        return fns.reduceRight((acc, curr)=>{
            return curr(acc);
        }, init);
    }
}

function pipe(...fns){
    return function(init){
        return fns.reduce((acc, curr)=>{
            return curr(acc);
        }, init);
    }
}

// function compose(...fns) {
//     return function (init) {
//         let len = fns.length;
//         let result = init;
//         for (let i = len - 1; i >= 0; i--) {
//             result = fns[i](result);
//         }

//         return result;
//     }
// }

// function pipe(...fns) {
//     return function (init) {
//         let len = fns.length;
//         let result = init;
//         for (let i = 0; i < len; i++) {
//             result = fns[i](result);
//         }

//         return result;
//     }
// }