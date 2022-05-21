function isPrime(n){
    if(n<4)return n!==1;
    if(n%2===0 || n%3===0)return 0;
    let d=2;
    for(let i=5;i<=Math.sqrt(n);i+=d,d=6-d){
        if(n%i===0)return 0;
    }
    return 1;
}

for(let i=1;i<=100;++i){
    if(isPrime(i))console.log(i);
}
