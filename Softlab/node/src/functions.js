export function isPrime(n) {
//    if (n < 0) throw new Error(`${n} is not in a range of Primes or NON Prime numbers. Try 2 and more!`);
//    if (!n) throw new Error(`${n} is not in a range of Primes or NON Prime numbers. Try 2 and more!`);
//    if (n === 1) throw new Error(`${n} is not in a range of Primes or NON Prime numbers. Try 2 and more!`);
    if (n < 4) return n !== 1;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let d = 2;
    for (let i = 5; i <= Math.sqrt(n); i += d, d = 6 - d) {
        if (n % i === 0) return false;
    }
    return true;
}