const oddLengths = (arr) => {
    return arr.reduce((acc, curr) => {
        return (curr.length % 2) ? [...acc, curr.length] : acc
    }, []);
}

console.log(oddLengths(['a', 'abcd', 'abcde', 'abc', 'ab']));

