const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim();

let count = 0;
let condition = true;
let sum = 0;
let num = Number(input);

while (condition) {
  count++;

  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (num === Number(input)) {
    condition = false;
  }
}
console.log(count);
