const fs = require("fs");
const input = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const x = [];

for (let i = 1; i <= 30; i++) {
  if (input.indexOf(i) === -1) {
    x.push(i);
  }
}

x.sort((a, b) => {
  return a - b;
});

console.log(x.join("\n"));
