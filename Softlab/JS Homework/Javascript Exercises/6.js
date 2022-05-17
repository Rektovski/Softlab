const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];

ans=1;
check=0;

answer = numbers.filter(
    value => {
        if(value){check=1,ans*=Math.abs(value)}
    }
)

if(check)console.log(ans);
else console.log(0);