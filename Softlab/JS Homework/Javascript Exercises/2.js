const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

answer = numbers.forEach(
    value => {
        if(value%2)console.log(Math.pow(value,2));
        }
)

answer = numbers.filter(
    value => {
        if(value%2)console.log(Math.pow(value,2));
    }
)

answer = numbers.map(
    value => {
        if(value%2)console.log(Math.pow(value,2));
    }
)