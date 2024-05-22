//  this refers current context

const user = {
  username: "rahul",
  price: 799,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this); // gives {} as we are in node environment and empty object is the global object for node environment

//  but in browser console we get window as it is the global object

/*
function chai() {
  let username = "hitesh";
  //   console.log(this); //gives long list of object
  console.log(this.username); // gives undefined => only works with objects not functions
}

*/

// chai();

const chai = function () {
  let username = "hitesh";
  console.log(this.username); // gives undefined
};

// arrow function
const arrowChai = () => {
  let username = "hitesh";
  console.log(this);
};

chai();
arrowChai();

//  basic arrow function
const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(7, 8));

//  implicit arrow function for single line function
const addTwo1 = (num1, num2) => num1 + num2;
console.log(addTwo1(7, 8));

//  another technique which is widely used in React

// const addTwo2 = (num1, num2) => (num1 + num2);
// console.log(addTwo2(7, 8));

//  parethentis are removed when format

//  return object using implicit arrow function
const addThree = (num1, num2) => ({ username: "rahul" });

console.log(addThree(7, 9));

const myArray = [2, 5, 6, 7, 1];
// myArray.forEach(() => {})
