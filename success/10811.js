const fs = require("fs");
const [nm, ...array] = fs.readFileSync("ex.txt").toString().trim().split("\n");

const [N, M] = nm.split(" ").map(Number);

const basket = [];

for (let i = 1; i <= N; i++) {
  basket.push(i);
}

for (let i = 0; i < M; i++) {
  let [I, J] = array[i].split(" ").map(Number);
  let t = basket.slice(I - 1, J).reverse();
  basket.splice(I - 1, J - I + 1, ...t);
}
console.log(basket.join(" "));

// [1,2,3,4,5]
// [2,1,4,3,5] 12 >> 21
// [2,1,4,3,5] 34 >> 43
// [3,4,1,2,5] 1234 >> 4321

// let t = [2, 1, 4, 3];

// console.log(t.reverse());
// let tsl = basket.slice(0, 4).reverse();
// let tsp = basket.splice(2, J-i+1);
// console.log(basket);
// console.log("slice", tsl);
// console.log("splice", tsp);
