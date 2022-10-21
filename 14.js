// 14.
// Create a function takes a string and a letter and splits the string to a list of strings by the letter like:
// "a,bcd,e,fg" and ',' becomes ["a", "bcd", "e", "fg"]

function splitsByComma (s) {
    
    s=s.split(",");
    return s;
}
console.log(splitsByComma("a,bcd,e,fg"));