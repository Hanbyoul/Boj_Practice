const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("\n");
console.log(input);

let str = "";
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    str += input[j].split("")[i];
  }
}
console.log(str);
