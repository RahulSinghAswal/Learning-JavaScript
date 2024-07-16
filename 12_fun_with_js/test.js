const myArr = [];
// % DebugPrint(myArr);

// continuous , holey

// SMI(small integer)
// Packed elements
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5];
// PACKED SMI_ELEMENTS -    most opetimized type but restricted to only number

arrTwo.push(6.0);
// PACKED_DOUBLE_ELEMENTS - conversion to smi is not possible after converted to double

arrTwo.push("7");
// PACKED_ELEMENTS

arrTwo[10] = 11;
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]); // holey element
console.log(arrTwo[19]); // bound check - return undefined

//  in case of  holey array
// bound check
// hasOwnProperty (arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 9)
// hasOwnProperty(Object.prototype , 9)

// holes are very expensive in JS

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED - continuous

// H_SMI > H_DOUBLE > H_PACKED - holey

// around 30 variations are available

const arrFour = new Array(3); // this step can be optimized
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = "1"; // HOLEY_ELEMENTS
arrFour[1] = "2"; // HOLEY_ELEMENTS
arrFour[2] = "3"; // HOLEY_ELEMENTS

const arrFive = [];
arrFive.push("1"); // PACKED_ELEMENTS
arrFive.push("2"); // PACKED_ELEMENTS
arrFive.push("3"); // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5];
arrSix.push(NaN); // PACKED_DOUBLE
arrSix.push(Infinity); // PACKED_DOUBLE

// for, for-of, forEach are preferred
