// 7.
// Create a function that takes a string and a letter,
// than returns a list that contains all the indexes where the letter occured in the string.

// function indexOf(s,letter) {
//     // const newS=s.split('');
//     let listOfIndexes=[];

//     for (let i=0; i<s.lenght; i++) {
//         if(s[i]===letter) {
//       listOfIndexes.push(i);
//     }
// }
//     return listOfIndexes;
   
// } 




function indexOf(s, letter) {
    const listOfIndexes = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === letter) {
        listOfIndexes.push(i);
      }
    }
    return listOfIndexes;
  }
console.log(indexOf("string","s"));