const fs = require("fs");
const [h, m, t] = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .join(",")
  .split(" ")
  .join(",")
  .split(",")
  .map((i) => +i);

resultM = (m + t) % 60;
resultH = h + Math.floor((m + t) / 60);
if (resultH >= 24) {
  resultH -= 24;
}

console.log(resultH, resultM);
