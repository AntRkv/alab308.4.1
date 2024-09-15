// let row = "";
// let cell = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== "," && str[i] !== "\n" && i !== str.length - 1) {
//     cell += str[i];
//   } else if (str[i] === ",") {
//     row = row + cell + " ";
//     cell = "";
//   } else if (str[i] === "\n") {
//     row = row + cell;
//     console.log(row);
//     row = "";
//     cell = "";
//   } else if (i == str.length - 1) {
//     row = row + cell + str[str.length - 1];
//     console.log(row);
//     row = "";
//     cell = "";
//   }
// }

// When code is outdated or inefficient, it often goes through a process called “refactoring.” Refactoring code is the process of restructuring that code without changing its original behavior.
// For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.

// let str =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let row = str.split("\n");
// let arr = [];

// row.forEach((row) => {
//   let newRow = row.split(",").join(" ");
//   arr.push(newRow);
// });

// // console.log(arr);

// // Declare a variable that stores the number of columns in each row of data within the CSV.
// // Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// let strSec =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let arrN = strSec.split("\n");
// let numOfCol = arrN[0].split(",");

// let twoDimensionalArray = new Array(numOfCol.length);
// for (let i = 0; i < twoDimensionalArray.length; i++) {
//   twoDimensionalArray[i] = new Array(numOfCol.length);
// }

// for (let i = 0; i < numOfCol.length; i++) {
//   let arrTemp = arrN[i].split(",");
//   for (let x = 0; x < numOfCol.length; x++) {
//     twoDimensionalArray[i][x] = arrTemp[x];
//   }
// }
// console.log(twoDimensionalArray);

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let input = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"],
];

let idS = [];
let output = [];
for (let i = 0; i < input[0].length; i++) {
  idS.push(input[0][i].toLowerCase());
}

for (let i = 1; i < input.length; i++) {
  let objA = {};
  for (let x = 0; x < idS.length; x++) {
    objA[idS[x]] = input[i][x];
  }
  output.push(objA);
}

console.log(output);
