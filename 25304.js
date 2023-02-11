const fs = require("fs");
let input = fs.readFileSync("ex.txt").toString().trim().split("\n");

let total = +input[0];
let count = +input[1];
let sum = 0;

console.log(total);
console.log(count);

for (let i = 2; i <= count + 1; i++) {
  let newArr = input[i].split(" ").map((i) => +i);
  console.log(newArr);
  sum += newArr[0] * newArr[1];
}

console.log(total === sum ? "Yes" : "No");
