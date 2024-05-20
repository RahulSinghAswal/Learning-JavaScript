// const tinderUser = new Object()
//  this is singleton object
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//  ab hum object ke ander object denge

const regularUser = {
  email: "some@gmailcom",
  fullname: {
    userfullname: {
      firstname: "rahul",
      lastname: "aswal",
    },
  },
};

console.log(regularUser.fullname?.userfullname.firstname);

//  ? is for protection

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const obj3 = { obj1, obj2 };
console.log(obj3); // result into an object with two objects (problematic like arrays)

// const obj4 = Object.assign(obj1, obj2);
// one more syntax

const obj4 = Object.assign({}, obj1, obj2);

console.log(obj4);

// also go for mdn docs for object assign

const obj5 = {
  5: "c",
  6: "d",
};

const obj6 = Object.assign({}, obj1, obj2, obj5);
console.log(obj6);

// one more syntax - simple and latest
const obj7 = { ...obj1, ...obj2, ...obj5 };
console.log(obj7);

//   when data comes from databases it comes as an array of objects

const users = [
  {
    id: 1,
    email: "rahul@gmail.com",
  },
  {
    id: 1,
    email: "rahul@gmail.com",
  },
  {
    id: 1,
    email: "rahul@gmail.com",
  },
  {
    id: 1,
    email: "rahul@gmail.com",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

//  important when value is not present
console.log(tinderUser.hasOwnProperty("isLogged"));

//  to get all the methods go for console

//  objects part-3 destructuring and API

const course = {
  coursename: "JS in Hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

// course.courseInstructor

const { courseInstructor : instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

//  react part

/*
const navbar = ({company}) => {

}

navbar(company = "hitesh")

*/
// pahle values xml format me aati thi ab json (object) me aati hai

// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price": "free"

// }

// kyai baar arrays ke format me bhi mil sakti hai


[
    {}, {}, {}
]

// tried random user api and json formatter