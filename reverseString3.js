// Create a function that reverses a string

function reverseString3 (string) {
    let newstring=string.split('');
    let finalString='';
    for( let i=newstring.length-1; i>=0; i--){
        // newstring.shift(newstring[i]);
        finalString+=newstring[i];

    }
   return finalString;
}
console.log(reverseString3("tegnapelott"))


