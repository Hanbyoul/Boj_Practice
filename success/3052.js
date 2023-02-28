const fs = require("fs");
const input = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = [];

for (let i = 0; i < 10; i++) {
  result.push(input[i] % 42);
}

let cnt = new Set(result);

console.log(cnt.size);
