const fs = require("fs");
const input = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

let [H, M] = input;

// M -= 45;

// if (M < 0) {
//   M += 60;
//   H--;
//   if (H === -1) {
//     H = 23;
//   }
// }

// console.log(H, M);

if (H === 0) {
  H = 24;
}

const T = H * 60 + M - 45;

const hour = Math.floor(T / 60);

const minuit = T - hour * 60;

console.log(hour, minuit);
