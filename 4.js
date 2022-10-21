// Create a function that returns how many letters in the word: "duck" (it is four)


counter=0;
function howManyLetters (s) {
    console.log(s.length);
    for (let i=0; i<s.length; i++) {
        
        counter++;
    }
    return counter;
}
console.log(howManyLetters('tegnap'));