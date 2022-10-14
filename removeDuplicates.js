// Create a function that takes a list of numbers and
// returns a new list where all the duplicate values are removed

function removeDuplicates(array) {
    let newArray=[];
    for (let i=0; i<array.length; i++) {
    if(!newArray.includes(array[i])) {
        newArray.push(array[i])
    }
}return newArray;
}
console.log(removeDuplicates([1,1,2,2,3,3,3,5]))