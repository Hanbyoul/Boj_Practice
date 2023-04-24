// 각 막대의 길이는 양의 정수이다
// 세 막대를 이용해서 넓이가 양수인 삼각형을 만들 수 있어야 한다.
// 삼각형의 둘레를 최대로 해야 한다.
// a, b, c가 주어졌을 때, 만들 수 있는 가장 큰 둘레를 구하는 프로그램을 작성하시오.

const [a, b, c] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(a >= b + c ? b + c + (b + c - 1) : a + b + c);
