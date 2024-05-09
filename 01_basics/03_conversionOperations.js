let score = "7abc";  //NaN

console.log(typeof score);
console.log(typeof (score));

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

let isLoggedIn = "rahul"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//  1 => true; 0 => false
//  "" => false
// "rahul"  => true


let someNumber = 7

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);



