// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

function swapElements (array) {
    let temp="";
    temp=array[0];
    array[0]=array[array.length - 1];
    array[array.length - 1]=temp;

    return array;

} 

console.log(swapElements(["Arthur", "Boe", "Chloe"]));