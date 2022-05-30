function reverse(value){
    let ans=0;
    while(value){
        ans=ans*10+value%10;
        value=Math.floor(value/10);
    }
    return ans;
}
console.log(reverse(200));