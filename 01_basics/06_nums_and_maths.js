const score = 700;

// another way to declare number
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2)); // for precesion value after decimal

const otherNumber = 1123.9348678;

console.log(otherNumber.toPrecision(4)); // returns string
// be careful when using toPrecision

const hundreds = 100000000;
console.log(hundreds.toLocaleString("en-IN"));

//max value , min value , max safe value,  isinfinit and more such functions available

// *******************  Maths  **********************

console.log(Math);

console.log(Math.abs(-7));

console.log(Math.round(4.5));

console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

console.log(Math.min(4, 7, 8, 23));
console.log(Math.max(4, 7, 8, 23));

console.log(Math.random()); // get value between 0 and 1
console.log(Math.random() * 10 + 1);

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// helps to create dice 
