i = require("fs").readFileSync("ex.txt", "utf8");
console.log(i == [...i].reverse().join`` ? 1 : 0);
