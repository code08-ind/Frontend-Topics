console.log("Hello From JS");

// Difference between map, filter and reduce.
// Study the each of the map, filter and reduce individually and note down parameters.
// For reduce, if we don't have a current value, it will take the First element of the array as the initial value.

// Polyfill of Map
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }

    return temp;
}

// Polyfill of Filter
Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i]);
    }

    return temp;
}

// Polyfill of Reduce
Array.prototype.myReduce = function (cb, initialVal) {
    let acc = initialVal;

    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, arr) : this[0];
    }

    return acc;
}

let students = [
    {name:"Piyush", rollNumber:31, marks: 80},
    {name:"Jenny", rollNumber:15, marks: 69},
    {name:"Kaushal", rollNumber:16, marks: 35},
    {name:"Dilpreet", rollNumber:7, marks: 55},
];

const totalMarks = students.map((student)=>{
    if(student.marks<60) student.marks += 20;

    return student;
}).filter((stu)=> stu.marks>60).reduce((acc, curr)=> acc = acc+curr.marks, 0);

console.log(totalMarks);