const fs = require("fs");
const input = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

const result = [1, 1, 2, 2, 2, 8];
const output = [];

for (let i = 0; i < result.length; i++) {
  output[i] = result[i] - input[i];
}

console.log(...output);
