const fs = require("fs");
const [count, array, num] = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const test = array.split(" ").filter((prev) => prev === num);
console.log(test); // [ '2', '2', '2' ]

const cnt = array.split(" ").filter((prev) => prev === num).length;
console.log(cnt); // 3
