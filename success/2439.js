const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString();
const count = Number(input);

for (let i = 0; i < count; i++) {
  let star = "";
  for (let j = count - 1; j >= 0; j--) {
    star += j <= i ? "*" : " ";
  }
  console.log(star);
}
