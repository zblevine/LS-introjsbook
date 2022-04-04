let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you?\n'));
let inXYears = time => `In ${time} years, you will be ${age + time} years old.`;
console.log(`You are ${age} years old.`)
for(let i = 10; i < 50; i += 10) {
    console.log(inXYears(i));
}