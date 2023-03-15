const fs = require("fs");
const input = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let max = -Infinity;
let col;
let row;

for (let i = 0; i < input.length; i++) {
  if (Math.max(...input[i]) > max) {
    max = Math.max(...input[i]); //최대값
    row = i + 1; // 행(row)값
    col = input[i].indexOf(max) + 1; // 열(column)값
  }
}
console.log(max);
console.log(row, col);
