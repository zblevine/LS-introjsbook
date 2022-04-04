function isNotANumber(input) {
    return (!input) && (typeof(input) === 'number') && (input !== 0);
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(0));
console.log(isNotANumber('asf'))
console.log(isNotANumber(23))