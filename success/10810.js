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
