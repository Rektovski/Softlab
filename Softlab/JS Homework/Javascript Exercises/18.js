const arr = ['erti','ori','sami'];

// #1
console.log(arr.join(''));


// #2

let ans="\"";
for(i=0;arr[i];++i){
    if(arr.length-1==i)ans+=arr[i]+"\"";
    else ans+=arr[i]+", ";
}
console.log(ans);