const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const stack = [];
const result = [];

input.slice(1).forEach((val) => {
  switch (val[0]) {
    case 1:
      stack.push(val[1]);
      break;

    case 2:
      result.push(stack.pop() ?? -1);
      // 메서드의 인자로 pop의 결과값을 null 병합 연산자로 처리
      break;

    case 3:
      result.push(stack.length);
      break;

    case 4:
      result.push(stack.length === 0 ? 1 : 0);
      break;

    case 5:
      result.push(stack.length > 0 ? stack[stack.length - 1] : -1);
      break;
  }
});

console.log(result.join("\n"));
