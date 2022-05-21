for(let i=1;i<=100;++i){
    let ans="";
    ans+=i+" -";
    if(i%3===0 && i%5===0)ans+=" FizzBuzz";
    else if(i%3===0)ans+=" Fizz";
    else if(i%5===0)ans+=" Buzz";
    console.log(ans);
}