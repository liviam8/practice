// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

function swapElements (names) {
    let temp="";

    temp=names[0];
    names[0]=names[2];
    names[2]=temp;
    console.log(names)

} 

console.log(swapElements["Arthur", "Boe", "Chloe"]);