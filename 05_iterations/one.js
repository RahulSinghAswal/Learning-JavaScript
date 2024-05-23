//  for loop
//  shortcut for duplicate selecting -- ctrl + d

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  //   console.log(element);
}

// console.log(element); // error - not accessible

for (let i = 1; i <= 10; i++) {
  //   console.log(`outer loop value : ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value : ${j} and inner loop ${i}`);
    // console.log(i + " x " + j + " = " + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

//  in JavaScript out of bound error is shown it simply gives undefined

//  break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    break; // out of loop
  }
  console.log(`value of index is ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue; // out of current iteration of loop
  }
  console.log(`value of index is ${index}`);
}
