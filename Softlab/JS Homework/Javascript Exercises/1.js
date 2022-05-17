const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

answer = numbers.filter(
    value => {
        if(value%2==0)console.log(value);
    }
);

answer = numbers.forEach(
    value => {
        if(value%2==0)console.log(value);
    }
)