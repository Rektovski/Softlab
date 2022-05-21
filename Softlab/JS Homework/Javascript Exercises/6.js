const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];

console.log(
    numbers
        .map(value => value)
        .filter(value => value!==0)
        .reduce((total,value) => total*=value,1)
);