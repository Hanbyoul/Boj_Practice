const fs = require("fs");
const arr = fs.readFileSync("ex.txt").toString().trim().split("\n");

for (let i = 1; i <= arr[0]; i++) {
  let [A, B] = arr[i].split(" ");
  console.log(+A + +B);
}
