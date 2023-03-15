// 행 열
// N  M
// 3  3

//A
// 1 1 1
// 2 2 2
// 0 1 0

//B
// 3 3 3
// 4 4 4
// 5 5 100

//행의 갯수로 A와 B를 나눈다
//열의 갯수(AorB의 원소)로 비교한다.
const fs = require("fs");
const input = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));
const [N, M] = input.shift();
const result = Array.from(Array(N), () => new Array(M));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    result[i][j] = input[i][j] + input[i + N][j];
  }
  console.log(result[i].join(" "));
}
