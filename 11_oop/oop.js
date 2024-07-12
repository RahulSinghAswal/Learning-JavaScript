// object literal - basic unit
const user = {
  username: "rahul",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username : ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // it is different in browser

// constructor function - new keyword in object

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Hello ${this.username}`);
  };

  return this; // it is implicitly defined to return this
}

const userOne = new User("rahul", 7, true);
const userTwo = new User("bhanu", 11, false);
console.log(userOne); // values are overwritten when we did not use new keyword
console.log(userTwo);

// new keyword - new empty object created
// constructor function is called by new keyword
// this keyword - points to the new object

// read instance of mdn
