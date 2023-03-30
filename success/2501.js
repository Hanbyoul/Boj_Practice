// N K
//N의 약수중 K번째에 잇는 작은수
//만약 N의 약수는 2개인데 K가 더 클경우 0을 출력

//6 3

//1,2,3,6
//3

//1. N의 약수를 배열에 담는다
//2. N의 약수가 담긴 배열의 인덱스를 찾을때 K-1 공식사용한다
//3.  if N.length < K 경우 return 0

const fs = require("fs");
const [N, K] = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = [];
for (let i = 1; i <= N; i++) {
  if (!(N % i)) {
    arr.push(i);
  }
}

console.log(arr.length < K ? 0 : arr[K - 1]);
