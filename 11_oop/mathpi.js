const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 199,
  isAvailable: true,

  orderChai: function () {
    console.log("Chai nhi bani");
  },
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: false, //stop iterable
});

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of chai) {
//     console.log(`${key} : ${value}`);

// }

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
