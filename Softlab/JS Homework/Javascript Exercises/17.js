function isPalindrome(value){
    return value===value.split('').reverse().join('');
}
console.log(isPalindrome("121"));