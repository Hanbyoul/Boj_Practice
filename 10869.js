const fs = require("fs");
const input = fs
  .readFileSync("예제.txt")
  .toString()
  .split(" ")
  .map((i) => +i);
const [a, b] = input;

const calculate = (a, b) => {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(Math.floor(a / b));
  console.log(a % b);
};
calculate(a, b);
