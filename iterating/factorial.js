function factorialIter(x) {
    for(let i = x-1; i > 1; i--) {
        x = x * i;
    }
    return x; //ignoring that 0! = 1 for now
}

function factorialRecurse(x) {
    if (x < 2) return 1;
    return x * factorialRecurse(x-1);
}

console.log(factorialIter(1))
console.log(factorialRecurse(1))
console.log(factorialIter(10))
console.log(factorialRecurse(10))