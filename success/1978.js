//소수는 1과 자신외의 약수를 가지지 않는 수
//1보다 큰 자연수

//1  X
//2 - 1 , 2  (1은 제외시킴 결국 2)
//3 - 1 , 3
//4 - 1 , 2 , 4 X
//5 - 1 , 5
//6 - 1 , 2 ,3 ,6 X
//7 - 1 , 7
//8 - 1 , 2 , 4 , 8 X
//9 - 1, 3,9 X

const [N, ...rest] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let cnt = 0;
let numbers = rest[0];

for (let i = 0; i < N; i++) {
  let result = [];
  for (let j = 1; j <= numbers[i]; j++) {
    if (!(numbers[i] % j)) {
      result.push(j);
    }
  }
  if (result.length === 2) {
    cnt++;
  }
}
console.log(cnt);
