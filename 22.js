// 22
// Create a function that takes an array of integers and returns a new one
// consisting only those numbers that occured minimum twice in the original array

function minimumTwice (array) {
    let newArray=array.sort();
    let finalArray=[];
    for (let i=0; i<newArray.length; i++) {
        if(newArray[i]===newArray[i+1]  && !finalArray.includes(array[i])) {
            finalArray.push(newArray[i]);
        }
    } 
    return finalArray;
}
console.log(minimumTwice([1,5,7,4,2,9,2,1,1,2,9]));