const fs = require("fs");
const [T, ...RS] = fs.readFileSync("ex.txt").toString().trim().split("\n");

let result = [];

for (let i = 0; i < Number(T); i++) {
  let [R, S] = RS[i].split(" ");
  let P = [];

  for (j = 0; j < S.length; j++) {
    let k = new Array(Number(R)).fill(S[j]);
    P.push(...k);
  }
  result += P.join("");

  if (i < Number(T) - 1) {
    result += "\n";
  }
}

console.log(result);
