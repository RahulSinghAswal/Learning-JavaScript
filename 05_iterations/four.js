//  for in loop  -- mostly for objects

const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
  swift: "Swift by Apple",
};

for (const key in myObject) {
  //   console.log(key); // print all keys
  //   console.log(myObject[key]); // print all values
  //   console.log(`${key} is shortcut for ${myObject[key]}`);
}

//  is for in working for arrays
const programming = ["JavaScript", "C++", "ruby", "Swift", "Python", "Java"];

for (const key in programming) {
  //   console.log(key); // keys are index
  console.log(programming[key]);
}

//  is for in work for map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("UK", "United Kingdom");
map.set("IN", "India");

for (const key in map) {
  //   console.log(key);
  //  nothing happens as maps are not iterable
}


