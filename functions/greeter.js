let rlSync = require('readline-sync');

function getName(prompt) {
    return rlSync.question(prompt);
}

let firstName = getName('What is your first name?\n');
let lastName = getName('What is your last name?\n');
console.log(`Hello, ${firstName} ${lastName}!`);