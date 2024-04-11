const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const result = [];

const isVPS = (vps) => {
  const stack = [];
  for (let i = 0; i < vps.length; i++) {
    stack.push(vps[i]);
    if (stack.at(-1) === ")" && stack.at(-2) === "(") {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0 ? "YES" : "NO";
};

for (let i = 1; i < input.length; i++) {
  result.push(isVPS(input[i]));
}

console.log(result.join("\n"));

const isVPS2 = (vps) => {
  const stack = [];
  for (let i = 0; i < vps.length; i++) {
    if (vps[i] === "(") {
      stack.push(vps[i]);
    } else {
      if (stack.length === 0) {
        // 시작이 닫힌 괄호일 경우 중지.
        stack.push(vps[i]); // VPS를 판독하기 위해 1번만 push
        break;
      } else {
        stack.pop(); // stack에 남아있던 열린 괄호를 제거
      }
    }
  }
  return stack.length === 0 ? "YES" : "NO";
};

for (let i = 1; i < input.length; i++) {
  result.push(isVPS2(input[i]));
}

console.log(result.join("\n"));
