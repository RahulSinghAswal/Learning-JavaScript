//  for of loop -- mostly for arrays


//  array specific loop

//  ["". "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  //   console.log(`each char is ${greet}`);
}

//  Maps -- unique values , order is preserved
const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("UK", "United Kingdom");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, " => ", value);
}

const myObject = {
  game1: "Tekken3",
  game2: "Super Maria",
};

// for (const [key, value] of myObject) {
//   console.log(key, " => ", value);
// }

//  for of is not iterable on objects
