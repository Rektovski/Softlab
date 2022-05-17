const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];

a=0;

answer = numbers.filter(
    value => {
        if(value>0)a+=value;
    }
)

console.log(a);