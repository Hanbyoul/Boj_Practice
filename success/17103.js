const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();
// 문제에서 입력되는 최대 값
const board = Array.from({ length: 1000000 + 1 }, (i) => (i = 1));

board[0] = 0;
board[1] = 0;

for (let i = 2; i < board.length; i++) {
  if (board[i]) {
    for (let j = 2 * i; j < board.length; j += i) {
      board[j] = 0;
    }
  }
}

let result = [];

console.log(input);

input.forEach((num) => {
  let count = 0;
  for (let i = 2; i <= num / 2; i++) {
    if (board[i] && board[num - i]) {
      count++;
    }
  }
  return result.push(count);
});

console.log(result.join("\n"));
