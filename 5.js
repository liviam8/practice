// Create a function that takes two arrays and decides if their content is the same

function sameArrays(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if ((array1[i] !== array2[i])) {
            return false;
        }
    } 
    
    return true;
} 

console.log(sameArrays([1, 2, 3, 4], [1, 2, 3, 4, 5]));