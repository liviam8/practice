// Create a function that takes a list of numbers and returns the second biggest element from it

function secondBiggest (array) {
    let sortedArray=array.sort((a,b) => (a-b));
    let noduplicates= [];
    for (let i=0; i<sortedArray.length; i++) {
        if (!noduplicates.includes(sortedArray[i])) {
            noduplicates.push(sortedArray[i])
        }
    } return noduplicates[noduplicates.length-2]
}
console.log(secondBiggest([1,4,5,6,6]))



