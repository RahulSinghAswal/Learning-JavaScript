//  reduce -- refer mdn docs

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curr) {
//   console.log(`acc : ${acc} and curr : ${curr}`);
//   return acc + curr;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

//  real life use case -- finding total of all cart items

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 999,
  },
  {
    itemName: "Data Science Course",
    price: 3999,
  },

  {
    itemName: "Python Course",
    price: 999,
  },
  {
    itemName: "Mobile Dev Course",
    price: 1999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
