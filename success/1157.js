const fs = require("fs");
const input = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .toUpperCase()
  .split("");

const result = {};

for (let i = 0; i < input.length; i++) {
  const char = input[i];
  result[char] = (result[char] || 0) + 1;

  // 맨처음 혹은 새로운 문자[i]일 경우 result[char] 는 undefined 상태이기 때문에
  // result[char] undefined 유무를 체크하여
  // undefined일 경우 값을 0 을 넣어줘서 객체를 초기화 시킨뒤 +1 하여 카운팅된다.
  // 이미 있을경우 바로 +1 하여 카운팅된다.
}
let maxKey = [];
let maxVal = 0;
for (let prev in result) {
  const val = result[prev]; // val = 현재 (루프)순환중인 알파벳의 카운팅 값
  if (val > maxVal) {
    // maxVal값과 비교하여
    maxVal = val; // 큰값을 maxVal로 게속 업데이트한다.
    maxKey = [prev]; // 현재 (루프)순환중인 알파벳의 key가 배열로 선언된다
  } else if (val === maxVal) {
    // max값이 구해지고 난뒤 추가로 max값과 동일한 val이 있으면,key를 다시 배열에 넣는다
    // 만약에 작은 값이 연속적으로 동일하여 maxKey배열에 작은값이 들어가더라도
    // 다음 순회할때 큰값이 나오면, 큰값으로 업데이트된다.
    // 윗쪽 if문 에서 먼저 maxKey=[prev]로 배열을 초기화 시키기 때문이다
    maxKey.push(prev);
  }
}
console.log(maxKey.length > 1 ? "?" : maxKey[0]);
