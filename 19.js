// Write a function called `findUniqueItems()` that takes a list of numbers 
// as a parameter and returns a list of numbers in which every number is unique 
// (occurs only once)

function findUniqueItems(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[i])) {
            newArray.push(array[i])
        }
    } return newArray;
}

// Example
console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]))
// should print: `[1, 11, 34, 52, 61]`