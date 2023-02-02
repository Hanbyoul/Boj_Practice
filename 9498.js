const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString();
const num = Number(input);

// 오답
// if (num > 0 && num < 59) {
//   return console.log("F");
// } else if (num < 69) {
//   return console.log("D");
// } else if (num < 79) {
//   return console.log("C");
// } else if (num < 89) {
//   return console.log("B");
// } else if (num <= 100) {
//   return console.log("A");
// }

// console.log(num); // result : A

if (90 < num) {
  return console.log("A");
} else if (80 < num) {
  return console.log("B");
} else if (70 < num) {
  return console.log("C");
} else if (60 < num) {
  return console.log("D");
} else {
  return console.log("F");
}
