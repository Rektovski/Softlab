let i=1;

const setID = setInterval(fun, 20);

function fun() {
    if(i++===5)clearInterval(setID);
    console.log(new Date);
}