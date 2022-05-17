arr = [1,2,3,4,5,8];

function maxInArr(){

    let ans=null;
    arr.filter(value => {
        if(ans<value)ans=value;
    });
    return ans;
}

console.log(maxInArr());