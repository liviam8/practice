// Create a function that determines if a string is a palindrome

function reversedString (string) {
    let newString = '';
    // newString=string.split('').reverse().join("");

    // *********
    for (let i=string.length-1; i>=0; i--) {
        newString+=string[i];
    }
   
    return newString;
}
function isPolidrom (string) {
    const reversed=reversedString(string);
    if (reversed==string) {
        return "Is polidrom";
    } else {return "isnt a polidrom";}
}
console.log(isPolidrom('tegnaoekitt'));

