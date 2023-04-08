const [T, ...C] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const cents = [25, 10, 5, 1];

for (let i = 0; i < +T; i++) {
  let result = [];
  let Case = +C[i];

  for (let j = 0; j < cents.length; j++) {
    if (Case / cents[j] >= 1) {
      result.push(parseInt(Case / cents[j]));
      Case = Case % cents[j];
    } else {
      result.push(0);
    }
  }
  console.log(result.join(" "));
}
