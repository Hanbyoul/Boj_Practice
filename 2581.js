// 60
// 100

//소수들의 합
// 최소 소수값

const [start, end] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(start, end);

// for (let i = 0; i < N; i++) {
//   let result = [];
//   for (let j = 1; j <= numbers[i]; j++) {
//     if (!(numbers[i] % j)) {
//       result.push(j);
//     }
//   }
//   if (result.length === 2) {
//     cnt++;
//   }
// }
