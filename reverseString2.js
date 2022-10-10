function reverseString2(s) {
      console.log((s.split("").reverse().join("")));  
}
reverseString2("tegnapelott")

function reverseString2withForLoop(s) {
    let reverseString2=""
    for(let i=s.length-1; i>=0; i--){
        reverseString2+=s[i];
    } console.log(reverseString2);
}
reverseString2withForLoop("tegnapelott")