// Create a function that returns how many letters in the word: "duck" (it is four)

function countLetters (string) {
    let count=0;
    for (let i=0; i<string.length; i++) {
        count++;
    }
    return count
}
console.log(countLetters("string"))