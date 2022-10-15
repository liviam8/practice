// https://www.codewars.com/kata/59f08f89a5e129c543000069

function dup1(words) {
    const cleanWords = [];

    for (const word of words) {
        let cleanWord = word[0];

        for (let i = 1; i < word.length; i++) {
            if (word[i] !== word[i - 1]) {
                cleanWord += word[i];
            }
        }

        cleanWords.push(cleanWord);
    }

    return cleanWords;
}

function dup2(words) {
    const cleanWords = [];

    for (const word of words) {
        let cleanWord = '';

        for (let i = 0; i < word.length; i++) {
            if (i === word.length - 1 || word[i] !== word[i + 1]) {
                cleanWord += word[i];
            }
        }

        cleanWords.push(cleanWord);
    }

    return cleanWords;
}

console.log(dup1(['abracadabra', 'allottee', 'assessee']));
console.log(dup2(['abracadabra', 'allottee', 'assessee']));