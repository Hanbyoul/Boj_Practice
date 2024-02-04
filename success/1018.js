const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const [Length, ...chess] = input;

const [M, N] = Length.split(" ").map(Number);

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const result = [];

function whiteFirst(m, n) {
  let count = 0;
  for (let i = m; i < m + 8; i++) {
    for (let j = n; j < n + 8; j++) {
      if (chess[i][j] !== white[i - m][j - n]) {
        count++;
      }
    }
  }
  return count;
}

function blackFirst(m, n) {
  let count = 0;
  for (let i = m; i < m + 8; i++) {
    for (let j = n; j < n + 8; j++) {
      if (chess[i][j] !== black[i - m][j - n]) {
        count++;
      }
    }
  }
  return count;
}

for (let y = 0; y + 7 < M; y++) {
  for (let x = 0; x + 7 < N; x++) {
    result.push(whiteFirst(y, x));
    result.push(blackFirst(y, x));
  }
}

console.log(Math.min(...result));
