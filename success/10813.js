const fs = require("fs");
const [nm, ...array] = fs.readFileSync("ex.txt").toString().trim().split("\n");

const [N, M] = nm.split(" ").map(Number);

const result = [];

// N개의 바구니
// 바구니의 번호와 , 공의 번호는 같다.
// 바구니의 index번호와 공의 번호가 일치하게 for문을 돌려
// array 를 생성

for (let i = 1; i <= N; i++) {
  result.push(i);
}

// M번의 반복
for (let i = 0; i < M; i++) {
  let [I, J] = array[i].split(" ").map((i) => i - 1);
  let save = result[I]; //index의 위치 교환을 위해 임시 저장 변수
  result[I] = result[J];
  result[J] = save;
}
console.log(result.join(" "));
