const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().split("\n");
const cnt = input.shift();
const arr = Array.from(Array(100), () => Array(100).fill(0));
//값이 0 인 100*100 어레이 생성

for (let i = 0; i < +cnt; i++) {
  [x, y] = input[i].split(" ").map(Number);
  for (let j = x; j < x + 10; j++) {
    //열
    for (let k = y; k < y + 10; k++) {
      //행
      arr[j][k] = 1; // x3y=1
    }
  }
}

const result = arr.flat(); //2차원 배열을 1차원 배열로 변경
console.log(result.filter((i) => i === 1).length);
