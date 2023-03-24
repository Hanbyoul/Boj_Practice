const fs = require("fs");
let input = fs.readFileSync("ex.txt").toString().trim();

str = new RegExp("(c=|c-|dz=|d-|lj|nj|s=|z=)", "g");
console.log(input.replace(str, " ").length);

//
// const fs = require("fs");
// let input = fs.readFileSync("ex.txt").toString().trim();
// const Croatia = ["dz=", "c=", "c-", "d-", "lj", "nj", "s=", "z="];
// for (let i = 0; i < Croatia.length; i++) {
//   input = input.split(Croatia[i]).join("@");
// }
// console.log(input.length);
