const [nm, card] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

// console.log(nm);
// console.log(card);
const [N, M] = nm;
// let result = [];

// for (let i = 0; i < N; i++) {
//   for (let j = i + 1; j < N; j++) {
//     for (let k = j + 1; k < N; k++) {
//       let sum = card[i] + card[j] + card[k];
//       result.push(sum);
//     }
//   }
// }

// result.sort((a, b) => b - a);
// const choice = result.filter((i) => i <= M);
// console.log(choice.find((i) => i <= M));
let sum = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      if (card[i] + card[j] + card[k] <= M) {
        sum = Math.max(sum, card[i] + card[j] + card[k]);
        console.log(sum);
      }
    }
  }
}
// console.log(sum);
