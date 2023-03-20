//[1,2,3,4,5,6,7,8,9,10]
//순서를 회전 시킬 범위 1 ~ 6
// 기준 4

//           1,2,3,4,5,6,7,8,9,10
//           4,5,6,1,2,3,7,8,9,10
//           4,5,8,9,6,1,2,3,7,10
//           4,6,1,2,3,7,10,5,8,9
//           1,4,6,2,3,7,10,5,8,9
//           1,4,6,2,3,7,10,5,8,9

const fs = require("fs");
const input = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, M] = input.shift();

// console.log(input);

const arr = Array.from({ length: N }, (v, i) => (v = i + 1));
// console.log(arr);
// let move = arr.splice(3, 3);
// console.log(arr);
// console.log("뺀거", move);
// arr.splice(0, 0, ...move);
// console.log("완성", arr);

for (let n = 0; n < M; n++) {
  const [i, j, k] = input[n];
  let move = arr.splice(k - 1, j - k + 1);
  arr.splice(i - 1, 0, ...move);
}
console.log(arr.join(" "));
