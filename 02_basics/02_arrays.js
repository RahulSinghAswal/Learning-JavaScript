//  arrays part-2

const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batsman"];

// marvel_heroes.push(dc_heroes); 
// it inserts array into array

console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes); // it combines two arrays and returns new array
console.log(allHeroes);

// spread operator
const allHeroes2 = [...marvel_heroes, ...dc_heroes];
// spread is more preferable as it combines more than two arrays unlike concat
console.log(allHeroes2);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Rahul"));

console.log(Array.from("Rahul"));

console.log(Array.from({
    name : "rahul"
})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


// read more about isArray, from and of
