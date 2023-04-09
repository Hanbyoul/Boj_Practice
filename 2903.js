const input = require("fs").readFileSync("ex.txt").toString().trim() * 1;

let first = 2;

for (let i = 0; i < input; i++) {
  first += Math.pow(2, i);
}
console.log(first * first);

//
//    2^i + f     = f
//1 ((2^0) + 2 )  = 3   =   3^2 = 9
//2 ((2^1) + 3 )  = 5   =   5^2 = 25
//3 ((2^2) + 5 )  = 9   =   9^2 = 81
//4 ((2^3) + 9 )  = 17  =   17^2 = 289
//5 ((2^4) + 17 ) = 33  =    33^2 = 1089
