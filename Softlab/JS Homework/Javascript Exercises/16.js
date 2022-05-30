const text = "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.";

function wordsAndOccuranceOfWords(text) {
    const obj = {};
    const wordsArr = text.split(' ');
    wordsArr.forEach(element => {
        if (!obj[element]) {
            obj[element] = 0;
        }
        ++obj[element];
    })
    return obj;
}

console.log(wordsAndOccuranceOfWords(text));

/*
* function numOfWords(str) {
    const obj = {};
    const wordsArr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ')
    wordsArr.forEach((el, i) => {
        const word = el.toLowerCase();
        if(obj[word]){
            obj[word] = obj[word] + 1
        } else {
            obj[word] = 1;
        }
    })
    return obj;
}
console.log(numOfWords('Some small, small sentence!'))*/