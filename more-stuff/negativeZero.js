const isNegativeZero = (num) => (1/num === -Infinity)

console.log(isNegativeZero(0));
console.log(isNegativeZero(-0));
console.log(isNegativeZero(42));