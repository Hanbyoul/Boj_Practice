const fs = require("fs");
const input = fs
  .readFileSync("예제.txt")
  .toString()
  .split(" ")
  .map((i) => +i);

const [a, b] = input;

console.log(a > b ? ">" : a < b ? "<" : "==");

function solution(a, b) {
  if (a > b) {
    return ">";
  } else if (a < b) {
    return "<";
  } else if (a === b) {
    return "==";
  }
}
console.log(solution(a, b));
