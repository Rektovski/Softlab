function maxInArr(arr) {
    let ans = null;
    arr.filter(value => {
        if (ans < value) ans = value;
    });
    return ans;
}

const arr = [1, 2, 3, 4, 5, 8];

console.log(maxInArr(arr));