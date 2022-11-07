console.log("Hello World");

// then I can write anything I want 
// and it wont get errors because it is a comment
let x = 500; // set x to have the value 500
let y = 276;

let sum = x + y;
let pi = 3.14;

console.log("x is ", x);

let myName = "Calvin Venne";

// strings have a length property
myName.length;

let whatWillHappen = myName + x;

console.log(whatWillHappen, sum);

let crazMath = 100 * x / (sum + whatWillHappen) - y;

console.log(crazMath);

let isGameOver = false;

console.log(isGameOver, typeof isGameOver);

// arrays can hold lists of values
let ages = [25, 17, 16, 85];

console.log("ages is an array", ages);

let secondAge = ages[1];


let student = {
	name: "Calvin",
	grade: "A++ * 1000",
	gpa: 4.0,
	wearsAHat: false,
	friends: ["Me, Myself, and I"]
};

console.log("student is", student)
console.log("student name is", student.name)

student.gradeLevel = 9;