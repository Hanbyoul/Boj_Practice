const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const stack = [];

for (let i = 1; i < input.length; i++) {
  if (Number(input[i])) {
    stack.push(Number(input[i]));
  } else {
    stack.pop();
  }
}

console.log(stack.length === 0 ? 0 : stack.reduce((acc, cur) => acc + cur, 0));
