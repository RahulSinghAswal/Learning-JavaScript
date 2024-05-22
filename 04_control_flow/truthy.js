// const userEmail = "rahul@gmail.com"; // true
const userEmail = ""; // false

if (userEmail) {
  console.log("got user email");
} else {
  console.log("don't have user email");
}

//  falsy values => false, 0, -0, BigInt 0n, "", undefined, NaN, null

//  all other are true

//  surprise truthy values => "0", "false", " ", [], {}, function() {},

// if (userEmail.length === 0) {
//   console.log("array is empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined only
//  new operator
let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 15; // 15
val1 = null ?? 10 ?? 20; // 10

console.log(val1);

//  Terniary operator

//  condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
