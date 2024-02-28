const [N, arr1, M, arr2] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

// console.log(arr2.join(" "));

const frequencyArr = new Map();
arr1.forEach((n) =>
  frequencyArr.has(n)
    ? frequencyArr.set(n, frequencyArr.get(n) + 1)
    : frequencyArr.set(n, 1)
);

console.log(frequencyArr);

for (let i = 0; i < arr2.length; i++) {
  if (frequencyArr.has(arr2[i])) {
    arr2[i] = frequencyArr.get(arr2[i]);
  } else {
    arr2[i] = 0;
  }
}

console.log(arr2.join(" "));
