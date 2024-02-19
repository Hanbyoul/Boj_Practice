/**


첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 

둘쨰 줄-10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다

셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다.

넷째 줄에는 상근이가 가지고 있는 숫자 카드인지 아닌지를 구해야 할 M개의 정수가


1.내 카드 N 개
2.숫자 카드
3.비교할 카드 M 개
4.내카드와 비교할 카드

결과 
- 비교할 카드 어레이에서 내가 가진 카드가 존재 O 1
- 비교할 카드 어레이에서 내가 가진 카드가 존재 X 0

*/

const [N, Card, M, resultCard] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

const targetNumber = new Map();
Card.forEach((num, index) => {
  targetNumber.set(num, index);
});

// const answer = resultCard.map((num) => (targetNumber.get(num) ? 1 : 0));
const answer = resultCard.map((num) =>
  targetNumber.get(num) !== undefined ? 1 : 0
);

console.log(answer.join(" "));
