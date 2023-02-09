const fs = require("fs");
let n = fs.readFileSync("ex.txt").toString() * 1;
let j = 0;
for (i = 1; i <= n; i++) {
  j = j + i;
}
console.log(j);
