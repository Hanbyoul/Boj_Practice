//split('\n') 줄바꿈 단위로 배열 생성
//join('\n')  줄바꿈 단위로 배열 해체

const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString().trim().split("\n");
const [one, two] = input;
const [a, b, c] = input[1].split("");

console.log("step1");
console.log(one * c);
console.log(one * b);
console.log(one * a);
console.log(one * two);
console.log("\n");
/// step 2

let result = two
  .split("")
  .reverse()
  .map((i) => one * i);
result.push(one * two);
console.log("step2");
console.log(result.join("\n"));
