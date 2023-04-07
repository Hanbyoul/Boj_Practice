let [N, B] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// let x = {};
// let val = "0";
// let result = "";

// for (let j = 0; j < B; j++) {
//   x[j] = val;
//   if (j >= 9) {
//     val = String.fromCharCode(j + 56);
//   } else {
//     val++;
//   }
// }
// console.log(x);

// while (N >= B) {
//   result = x[parseInt(N % B)] + result;
//   N = parseInt(N / B);
// }
// result = x[parseInt(N)] + result;

// console.log(result);

console.log(N.toString(B).toUpperCase());
