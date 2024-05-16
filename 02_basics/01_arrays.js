//  arrays

const myArr = [0, 1, 2, 3, 4, 5, true, "Rahul"];
const myHeroes = ["Shaktiman", "Naagraj"];

const myArr2 = new Array(1, 2, 3, 5);

console.log(myArr[3]);

//  Array methods

//  push() - adds an element to the end of an array
myArr.push(6);
console.log(myArr);

// pop() - remove last value

myArr.pop();
console.log(myArr);

// unshift() - add value to the start
myArr.unshift(12);
console.log(myArr);

//  shift() - remove first value
myArr.shift();
console.log(myArr);

console.log(myArr.includes(7));
console.log(myArr.indexOf("Apple"));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr); // join combines values to comman separated strings

// slice, splice

console.log("Slice\n");
console.log("A ", myArr);

const myn1 = myArr.slice(1, 4);
console.log(myn1);
console.log("B", myArr);

console.log("Splice\n");

const myn2 = myArr.splice(1,4);
console.log("C", myn2);
console.log("B", myArr);


// splice modifies the original array