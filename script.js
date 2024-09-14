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

let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let row = str.split("\n");
let arr = [];

row.forEach((row) => {
  let newRow = row.split(",").join(" ");
  arr.push(newRow);
});

console.log(arr);
