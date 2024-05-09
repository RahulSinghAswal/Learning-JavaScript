console.log("2 > 1 ", 2 > 1);
console.log("2 >= 1 ", 2 >= 1);
console.log("2 <= 1 ", 2 <= 1);
console.log("2 == 1 ", 2 == 1);
console.log("2 != 1 ", 2 != 1);

console.log("2" > 1); //true
console.log("02" > 1); // true

console.log(null > 0); //f alse
console.log(null == 0); // false
console.log(null >= 0); // true

/*
the reason is that an equality  check == and comparisons > < >= <= work differently
Comparisons convert null to a number , treating it as 0
that why 3 null >= 0  is true and 1 null > 0 is false

*/

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
console.log(undefined > 0); // false

// avoid these type of comparisons

//  === strick check value & data type

console.log("2" === 2);
