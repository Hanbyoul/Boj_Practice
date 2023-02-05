const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);
const [x, y] = input;

if (x > 0 && y > 0) {
  return console.log(1);
} else if (x < 0 && y > 0) {
  return console.log(2);
} else if (x < 0 && y < 0) {
  return console.log(3);
} else {
  return console.log(4);
}
