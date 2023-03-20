const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim() * 1;
for (let i = 1; i <= input; i++) {
  console.log(" ".repeat(input - i) + "*".repeat(i * 2 - 1));
}
