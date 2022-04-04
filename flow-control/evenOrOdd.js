function evenOrOdd(num) {
    if (parseInt(num) !== num) {
        console.log(`${num} isn't an integer!`) 
    } else {
        console.log(num % 2 ? 'odd' : 'even');
    }
}

evenOrOdd(2);
evenOrOdd(25);
evenOrOdd(8.4);
evenOrOdd('hunter2');
evenOrOdd('rollercoaster')
