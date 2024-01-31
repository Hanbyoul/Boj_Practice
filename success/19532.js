const [a, b, c, d, e, f] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let x = 0;
let y = 0;
const D = a * e - d * b;
const Dx = c * e - f * b;
const Dy = a * f - d * c;

x = Dx / D;
y = Dy / D;
console.log(x, y);

// const max = 999;
// const min = -999;
// // console.log(min, max);

// for (let x = min; x <= max; x++) {
//   for (let y = min; y <= max; y++) {
//     if (a1 * x + b1 * y === c1 && a2 * x + b2 * y === c2) {
//       console.log("x :", x, "y :", y);
//     }
//   }
// }

// 크래머 법칙
