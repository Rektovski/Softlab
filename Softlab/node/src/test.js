import {expect} from "chai";
import {isPrime} from "./functions.js";

describe('Prime Numbers test', () => {
    it('should return true n==2',()=> {
        const result=isPrime(2);
        expect(result).that.equals(true);
    });

    it('should return true n==3',()=> {
        const result=isPrime(3);
        expect(result).that.equals(true);
    });

    it('should return false n==4',()=> {
        const result=isPrime(4);
        expect(result).that.equals(false);
    });

    it('should return true n==1000000007',()=> {
        const result=isPrime(1000000007);
        expect(result).that.equals(true);
    });

    it('should return true n==1000000009',()=> {
        const result=isPrime(1000000009);
        expect(result).that.equals(true);
    });
});



// oto@bitcamp.ge