let myName = "rahul  ";

// myName.trueLength();

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "web",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.rahul = function () {
  console.log("Rahul is present in all objects");
};

Array.prototype.heyRahul = function () {
  console.log("Rahul says hello");
};

// heroPower.rahul()

myHero.rahul();

// heroPower.heyRahul();

myHero.heyRahul();

const User = {
  name: "Rahul",
  email: "rahul@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};

anotherUsername.trueLength();

"   iceTea   ".trueLength();
