const fs = require("fs");
const ascii = fs.readFileSync("ex.txt").toString().charCodeAt(0);
console.log(ascii);
