const fs = require("fs");
const S = fs.readFileSync("ex.txt").toString().trim().split("");

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

let result = [];

for (let i = 0; i < alphabet.length; i++) {
  result.push(S.indexOf(alphabet[i]));
}

console.log(result.join(" "));
