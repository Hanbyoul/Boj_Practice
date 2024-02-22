const [NM, ...rest] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const [, M] = NM.split(" ").map(Number);

const target = rest.splice(-M);

// const PokemonName = rest.map((name, index) =>
//   (name + " " + (index + 1)).split(" ")
// );

// const PokemonBook = new Map([...PokemonName]);
const PokemonBook = new Map();

for (let i = 0; i < rest.length; i++) {
  PokemonBook.set(rest[i], i + 1);
}

const result = [];

for (let i = 0; i < M; i++) {
  if (isNaN(target[i])) {
    result.push(PokemonBook.get(target[i]));
  } else {
    result.push(rest[target[i] - 1]);
  }
}

console.log(result.join("\n"));
