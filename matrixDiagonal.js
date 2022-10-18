// - Create a two dimensional list dynamically with the following content.
//   Note that a two dimensional list is often called matrix if every
//   internal list has the same length.
//   Use a loop!
//
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1
//
//   Its length should depend on a variable
//  
// - Print this two dimensional list to the output



let matrix=[];
let size=4;
for (let i=0; i<size; i++) {
    //let innerArray=[]
    let str =""
    for (let j=0; j<size; j++) 
    if (i===j) {
        str+="*";
    } else str+=" ";
//    console.log(matrix[i]);
}

console.log(str);