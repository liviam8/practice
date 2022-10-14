// Create a function that takes a string and a letter,
// than returns a list that contains all the indexes where the letter occured in the string.

function whereIsTheLetter (string, letter) {
   let  newString=string.split('');
    let newArray=[];
    for (let i=0; i<newString.length; i++) {
        if (newString[i] === letter) {
            newArray.push(i);
        }
    } return newArray
}
console.log(whereIsTheLetter('tegnapelott','t'))