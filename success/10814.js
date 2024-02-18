// 나이와 이름이 가입한 순서

// 회원들을 나이가 증가하는 순으로,
// 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬

const [N, ...arr] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

arr.sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]));

console.log(arr.map((i) => i.join(" ")).join("\n"));
