 //Create a function that takes two list of numbers and returns a new list
// that only consists those numbers that are in the first array but not in the second--

function onlyInFirstArray (array1,array2) {
    let newArray=[];
    for (let i=0; i<array1.length; i++) {  
        if (!array2.includes(array1[i])){
            newArray.push(array1[i]);
        }
    }
    return newArray;
}
console.log(onlyInFirstArray([1,2,3],[3,4,5]))