const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim() * 1;
let n = 1;
let array = 1;
while (n < input) {
  n += array * 6;
  array++;
}

console.log(array);
