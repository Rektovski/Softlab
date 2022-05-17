function reverse(value){
    let ans=0;
    while(value){
        ans=ans*10+value%10;
        value/=10;
        value=Math.floor(value);
    }
    return ans;
}
console.log(reverse(26));