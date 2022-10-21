// 3.
// Create a function that determines if a string is a palindrome

function ifPalindrome (s) {
    reversedS='';
    reversedS=s.split("").reverse().join("");
    if (reversedS===s) {
        console.log("is palindrome");
    } else console.log("isnt a palindrome");
}

ifPalindrome("madam");
