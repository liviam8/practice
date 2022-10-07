// function reverseString(s) {

//     let message = "s.split is not a function";
		
//     try {
//         console.log(s.split("").reverse().join(""));
//     } catch(e){
//         console.log(e.message);
//         console.log(s);
//     }
// }
// console.log(reverseString("tegnapelott"))

function reverseString2(string) {
    let reversedString='';
    for (let i=string.length-1; i>=0; i--) {
        reversedString+=string[i];
        console.log(reversedString)
    }
}
console.log(reverseString2('tegnapelott'))
