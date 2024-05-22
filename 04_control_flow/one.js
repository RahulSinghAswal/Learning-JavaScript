// if

// <, >, <=, >=, ==, !=, ===, !==

const isUserLoggedIn = true;
const temperature = 41;

// if (temperature < 50) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

// console.log("execute");

// const score = 700;

// if (score > 700) {
//   const power = "fly";
//   console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);  // scope problem

//  shorthand notation

const balance = 1000;

// if (balance > 500) console.log("test"); // implicit scope

// we can write multiple lines by separating them using comma but don't do that

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

//  real life use case

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy coursees");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged in");
}
