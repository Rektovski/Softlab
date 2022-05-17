function fun(n){
    if(typeof(n)=="string"){
        for(let i=0;i<n.length;++i){
            if(n.split('')=='?')return true;
        }
        return false;
    }
    throw new Error('Parameter is not a string!');

}

console.log(fun(12));