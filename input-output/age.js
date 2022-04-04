let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you?\n'));
let inXYears = time => `In ${time} years, you will be ${age + time} years old.`;
console.log(`You are ${age} years old.`)
console.log(inXYears(10));
console.log(inXYears(20));
console.log(inXYears(30));
console.log(inXYears(40));