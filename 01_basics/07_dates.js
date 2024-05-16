//  dates

let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString(undefined, { timeZone: "Asia/Kolkata" }));

console.log("*******************************");

// let myCreatedDate = new Date(2023, 0, 23);
// month starts from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);

let myCreatedDate = new Date("01-14-2024");
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());

// timestamps are used in polls and quizes
let myTimeStamp = Date.now();
console.log(myTimeStamp); // gives mili seconds from January 1, 1970

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000)); // converted in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time`

newDate.toLocaleString("default", { weekday: "long" });
