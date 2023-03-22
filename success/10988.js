(i = require("fs").readFileSync(0, "utf8").trim()),
  console.log((i == [...i].reverse().join``) | 0);
