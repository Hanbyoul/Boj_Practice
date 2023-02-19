const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("\n");
const count = input[0];
let result = [];
for (let i = 1; i <= count; i++) {
  let line = input[i].split(" ").map((i) => +i);
  result += line[0] + line[1] + "\n";
}
console.log(result);
