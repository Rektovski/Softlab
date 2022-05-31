import * as func from './functions.js';

for(let i=2;i<101;++i){
    if(func.isPrime(i))console.log(i);
}

/*
try {
    for(let i=2;i<101;++i){
        if(func.isPrime(i))console.log(i);
    }
} catch (error){
    console.log(error);
} finally {
    console.log("Check is done!");
}

* */