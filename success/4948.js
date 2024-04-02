const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.pop();

let answer = [];

// 문제에서 입력되는 최대 값
const board = Array.from({ length: 123456 * 2 + 1 }, (n) => (n = 1));

board[0] = 0;
board[1] = 0;

for (let i = 2; i < board.length; i++) {
  if (board[i]) {
    for (let j = 2 * i; j < board.length; j += i) {
      board[j] = 0;
    }
  }
}

let count = 0;
for (let j = 0; j < board.length; j++) {
  if (board[j]) {
    count++;
    board[j] = count;
  } else {
    board[j] = count;
  }
  console.log(`${j}번째 : ${board[j]}`);
}

input.forEach((v) => answer.push(board[v * 2] - board[v]));

console.log(answer);
