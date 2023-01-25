const fs = require("fs");
const input = fs
  .readFileSync()
  .toString()
  .split(" ")
  .map((i) => +i);

const [a, b] = input;
console.log(a + b);
