const fs = require("fs");
const num = fs.readFileSync("ex.txt").toString() * 1;
for (let i = 1; i <= 9; i++) {
  let k = num * i;
  console.log(num, "*", i, "=", k);
}
