const name = "rahul";

const repoCount = 10;

console.log(name + repoCount + " value");
// Output: rahul10value
// this method is not recommended as it is old

// new method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare string

const gameName = new String("rahul-aswal-com");

console.log(gameName[0]); // accessing using key

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4); // end is not included
// give negative value but it does not take
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);
// can take negative values too

const newStringOne = "   rahul   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // remove starting and ending spaces

const url = "https://rahulaswal.online/rahul%20aswal";

console.log(url.replace("%20", "-"));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));