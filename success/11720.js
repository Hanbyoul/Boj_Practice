const fs = require("fs");
const [cnt, numbers] = fs.readFileSync("ex.txt").toString().trim().split("\n");
let result = 0;

for (let i = 0; i < cnt; i++) {
  let num = numbers.split("").map(Number)[i];
  result += num;
}
console.log(result);
