const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().split(" ");

let result = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    result.push(input[i]);
  }
}

let countOfWords = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    countOfWords++;
  }
}

console.log("내꺼", result.length);

console.log("정답인 다른사람 1", countOfWords);

console.log("정답인 다른사람 2", input[0] === "" ? 0 : input.length);
