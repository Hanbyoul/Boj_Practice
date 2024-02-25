const [NM, ...rest] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const [, M] = NM.split(" ").map(Number);
const result = [];
const PokemonBook = new Map();
const target = rest.splice(-M);

for (let i = 0; i < rest.length; i++) {
  PokemonBook.set(rest[i], i + 1);
}

for (let i = 0; i < M; i++) {
  if (isNaN(target[i])) {
    result.push(PokemonBook.get(target[i]));
  } else {
    result.push(rest[target[i] - 1]);
  }
}

console.log(result.join("\n"));
