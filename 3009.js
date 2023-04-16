// // 5 5
// // 5 7
// // 7 5

const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

// const xList = [];
// const yList = [];

// for (let i = 0; i < input.length; i++) {
//   const [x, y] = input[i].split(" ").map(Number);
//     xList.push(x)
//     yList.push(y)
// }

// let resultX;
// let resultY;
// for (let j = 0; j < input.length; j++) {
//   if (xList.indexOf(xList[j]) === xList.lastIndexOf(xList[j])) {
//     resultX = xList[j];
//   }

//   if (yList.indexOf(yList[j]) === yList.lastIndexOf(yList[j])) {
//     resultY = yList[j];
//   }
// }

// console.log(resultX, resultY);

let X = 0;
let Y = 0;
for (i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  X ^= x;
  Y ^= y;
}
console.log(X, Y);
