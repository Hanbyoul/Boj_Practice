const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
