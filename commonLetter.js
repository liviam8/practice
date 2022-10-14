// 18.
// Create a function that takes two strings and returns an array of characters
// that consist all the common letters of the two arrays

function commonLetters (string1, string2) {
    let newString='';
    for (let i=0; i<string1.length; i++) {
        if(string2.includes(string1[i]) && !newString.includes(string1[i])) {
            newString+=string1[i];
        }
    } return newString
        
} console.log(commonLetters('tegnapelott','tegnaputan'));