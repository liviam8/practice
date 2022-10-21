// 2.
// Create a function that reverses a string

function reversesAString(s) {
    //reversedString='';
    s=s.split("").reverse().join("");
    return s;
}
console.log(reversesAString("tegnapelott"));


function reversesAString2 (s) {
    s=s.split('');
    // console.log(s);
    reversedS='';
    for (let i=s.length-1; i>=0; i--) {
        reversedS+=s[i];  
    }
    return reversedS;
}
console.log(reversesAString2("tegnapelott"));