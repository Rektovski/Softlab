function fun(s) {
    if (typeof s !== "string") {
        throw new Error('Parameter is not a string!');
    }
    return s.includes('?');
}


try{
    console.log(fun(12));
}catch (err){
    console.log(err);
}
