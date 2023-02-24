const fs = require("fs");
const [mn, ...array] = fs.readFileSync("ex.txt").toString().trim().split("\n");

const M = mn.split(" ").map(Number)[0]; // 바구니의 갯수 ( Array [ 0 , 0 , 0 , 0 , 0])
const N = mn.split(" ").map(Number)[1]; // 공을 넣을 사이클
console.log(M);
console.log(N);

let resultArray = new Array(M).fill(0); //M개의
console.log("빈바구니", resultArray);

for (let n = 0; n < N; n++) {
  let [i, j, k] = array[n].split(" ").map(Number);
  resultArray.fill(k, i - 1, j);
}
console.log(resultArray.join(" "));
// console.log("시작", i, "끝", j, "채우기", k); //첫 사이클

// resultArray.fill(k, i - 1, j);
// console.log(resultArray);

// resultArray.fill(4, 3 - 1, 4);
// console.log(resultArray);

// resultArray.fill(1, 1 - 1, 4);
// console.log(resultArray);

// resultArray.fill(2, 2 - 1, 2);
// console.log(resultArray);

// for(i=0;i<M)

//
// 바구니 1 ~ X
// 공    1 ~ X
//
// i바구니 ~ j바구니
// k공
//

//   5개의 바구니 = 5개의 어레이
//   4번의 계산

// 바구니에 공을 넣는 방법
// i j    k       0 0 0 0 0
// 1 2    3       3 3 0 0 0
// 3 4    4       3 3 4 4 0
// 1 4    1       1 1 1 1 0
// 2 2    2       1 2 1 1 0
