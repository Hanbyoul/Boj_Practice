const [treeCount, ...tree] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 최대공약수 함수
function gcd(a, b) {
  let r = a % b;
  return b === 0 ? a : gcd(b, r);
}

// for문 내부에서 최대공약수를 구해야되기 때문에
// 초기값으로 미리 입력값의 첫번째,두번째 차이값을 설정.

let distanceGcd = tree[1] - tree[0]; // 최대 공약수
let distArr = [tree[1] - tree[0]]; // 나무 사이 거리값

for (let i = 1; i < tree.length - 1; i++) {
  distArr.push(tree[i + 1] - tree[i]);
  distanceGcd = gcd(tree[i + 1] - tree[i], distanceGcd);
}

let output = 0; // 심어야 할 나무 수

// for문을 돌면서 나무사이 거리값과 최대공약수를 연산하여 심어야할 나무수를 구한다.
for (let i = 0; i < distArr.length; i++) {
  output += distArr[i] / distanceGcd - 1;
}
console.log(output);
