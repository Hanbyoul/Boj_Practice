const fs = require("fs");
const input = fs
  .readFileSync("예제.txt")
  .toString()
  .split(" ")
  .map((i) => +i);

const [a, b] = input;

console.log(a - b);
