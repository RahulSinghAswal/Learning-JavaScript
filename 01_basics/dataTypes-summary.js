// classification of data types is done on the based on how they stored in the memory

//  primitive - call by value

/*
  7 types : String,
 Number, 
 Boolean, 
 null(empty), 
 undefined(variable declared),
  Symbol(uniqueness - Advanced JS), 
  BigInt(scientific and very big value)  
 */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail // undefined


const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);  // false

const bigNumber = 123456776563264165314685899999888n
//  n is used to defined BigInt


console.log(bigNumber);

//  JS is dynamically typed language


//  referece type (non - primitve type)

//  array, objects , functions

const heroes = ["shaktimaan", "naagraj", "doga"]

// objects

let obj = {
    name : "Rahul",
    age : 20,
}


const myFunction = function () {
        console.log("Hello world");
}

console.log(typeof bigNumber);

console.log(typeof outsideTemp);

console.log(typeof myFunction); // function object

console.log(typeof id);

//  all non-primitive types are  function and function type is function object