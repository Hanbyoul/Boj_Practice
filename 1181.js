// 길이가 짧은 것부터
// 길이가 같으면 사전 순으로

const [N, ...word] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const uniqueWord = new Set(word);

console.log(
  [...uniqueWord]
    .sort()
    .sort((a, b) => a.length - b.length)
    .join("\n")
);
