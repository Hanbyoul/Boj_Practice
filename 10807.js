const fs = require("fs");
const [count, array, num] = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const cnt = array.split(" ").filter((prev) => prev === num).length;
const test = array.split(" ").filter((prev) => prev === num);
console.log(cnt);
console.log(test);
