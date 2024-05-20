//  singleton by using constructor
// Object.create
// constructor method

//  object literals
//  by default key is taken as string

// important for interview too
const mySym = Symbol("key1");

const JsUser = {
  name: "Rahul",
  "full name": "Rahul Singh Aswal",
  //   symbol as key
  mySym1: "key1",
  [mySym]: "mykey1",
  age: 19,
  location: "Greater Noida",
  email: "rahulsaswal007@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser.full name);
// that's why
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
// console.log( typeof [mySym]);

JsUser.email = "rahul@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "aswal@gmail.com";
console.log(JsUser);
//  error nhi aayega lekin values change nhi hogi

//  functions in object

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); // undefined
console.log(JsUser.greeting()); // error shown as we freeze object earlier

console.log(JsUser.greetingTwo());

// mostly we use fot operator