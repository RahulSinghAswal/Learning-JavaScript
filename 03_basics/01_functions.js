function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("H");
  console.log("U");
  console.log("L");
}

// sayMyName();

/*
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
*/

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2;
  // return result;
  // console.log("Rahul"); // unreachable code

  return number1 + number2;
}

addTwoNumbers("4", 3); // 43

//  parameters -- function definition
//  arguments -- function calling

const result = addTwoNumbers(3, 5);
console.log("Result : ", result);

/*
function loginUserMessage(username) {
  return `${username} just logged in`;
}
*/

function loginUserMessage(username = "Sam") {
  /*
  if (username === undefined) {
    console.log("Please enter a valid username");
    return;
  }
  */

  if (!username) {
    console.log("Please enter a valid username");
    return;
  }

  return `${username} just logged in`;
}

// console.log(loginUserMessage("rahul"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());

//  shopping cart problem -- no of arguments are unknow
// solved using rest operator -- ...
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200, 400, 500, 700));

//  handling objects using functions

const user = {
  username: "username",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);

handleObject({
  username: "rahul",
  price: 200,
});

//  handling arrays

const myNewArray = [200, 400, 600, 800];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500, 700]));
