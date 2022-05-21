const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

numbers
    .filter(value => value%2==0)
    .forEach(value => console.log(value));