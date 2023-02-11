const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("\n");
const count = +input[0];
let result = "";
for (let i = 1; i <= count; i++) {
  let newArr = input[i].split(" ").map((i) => +i);
  result += newArr[0] + newArr[1] + "\n";
}
console.log(result);
