const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("\n");

let str = "";
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j].split("")[i] !== undefined) str += input[j].split("")[i];
  }
}

console.log(str);
