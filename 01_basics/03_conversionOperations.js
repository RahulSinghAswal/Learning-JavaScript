let score = "7abc"; //NaN

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN

// null
score = null;
valueInNumber = Number(score);

console.log(valueInNumber); // 0

// undefined
score = undefined;
valueInNumber = Number(score);

console.log(valueInNumber); //NaN

// boolean
score = true;
valueInNumber = Number(score);

console.log(valueInNumber); // 1

// "7" => 3
// "7xyz" => NaN
// true => 1; false => 0

let isLoggedIn = "rahul";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//  1 => true; 0 => false
//  "" => false
// "rahul"  => true

let someNumber = 7;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

//  ********************  Operations  ************

let value = 7;

let negValue = -value;

// console.log(negValue);

console.log("simple arithmetic operations");
console.log("2+2 => ", 2 + 2);
console.log("2-2 => ", 2 - 2);
console.log("2*2 => ", 2 * 2);
console.log("2/2 => ", 2 / 2);
console.log("2**3 => ", 2 ** 3);
console.log("2%2 => ", 2 % 2);

let str1 = "hello";
let str2 = " rahul";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); // 32

//  data conversion is derived by this link -- https://tc39.es/ecma262/multipage/abstract-operations.html

console.log(((3 + 4) * 5) % 3);

console.log(+true); // 1
// console.log(true+); // error

console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;
//  do not prefer this way of assignment

let gameCounter = 100;
gameCounter++;

console.log(gameCounter);

// read this docs for prefix and postfix
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
