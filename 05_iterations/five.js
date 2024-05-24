//  for each loop -- high order functions - mostly for arrays

const coding = ["js", "ruby", "java", "python", "cpp"];

//  function in for each is callback --> callback function does not have its name, parameters are array value

// coding.forEach(function (item) {
//   console.log(item);
// });

//  arrow function

// coding.forEach((item) => {
//   console.log(item);
// });

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe);
// sirf reference dena hai execute nhi krna hai

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },

  {
    languageName: "Java",
    languageFileName: "java",
  },

  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
