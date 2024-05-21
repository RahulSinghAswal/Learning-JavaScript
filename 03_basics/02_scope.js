// scope => {}

// var c = 300;

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  //   c = 30;

  console.log("inner : ", a); // block scope
}

// for (let i = 0; i < array.length; i++) {
//     const element = array [i];

// }

console.log(a);
// console.log(b);
// console.log(c); // print 30

//  important -- node scope and browser console scope are different

//  nested functions

function one() {
  const username = "rahul";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //   console.log(website); //error

  two();
}

// one();

if (true) {
  const username = "rahul";
  if (username === "rahul") {
    const website = " youtube";
    console.log(username + website);
  }

  //   console.log(website); // errror
}

// console.log(username); // error

// ***************** interesting ******************
console.log(addone(5));
//  it works because of hoisting

function addone(num) {
  return num + 1;
}

// console.log(addTwo(5));
// error as we put function in a variable

const addTwo = function (num) {
  return num + 2;
};
