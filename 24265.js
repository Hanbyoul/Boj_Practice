const n = require("fs").readFileSync("ex.txt").toString() * 1;

// O(n2)

// let count = 0;
// for (let i = 1; i < n; i++) {
//   for (let j = i + 1; j <= n; j++) {
//     count++;
//   }
// }
// console.log(count);
// console.log(2);

// O(n)
// let sum = 0;
// for (let i = 1; i < n; i++) {
//   sum += i;
// }
// console.log(sum);
// console.log(2);

// O(1)
// console.log((n * (n - 1)) / 2);
// console.log(2);
