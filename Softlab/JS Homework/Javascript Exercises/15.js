function fun(s) {
    if (typeof s !== "string") {
        throw new Error('Parameter is not a string!');
    }
    return s.includes('?');
}

console.log(fun(12));