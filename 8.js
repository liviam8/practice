// 8.
// Create a function that takes two arrays and mixes them like this:
// [1, 2, 3] and [6, 7, 8] becomes [1, 6, 2, 7, 3, 8]

function mixes (array1,array2) {
    const newArray=[];
    for(let i=0; i<array1.lenght; i++) {
        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }
    return newArray;
}
console.log(mixes([1,2,3],[4,5,6]));


function mixTwoArrays(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      newArr.push(arr1[i]);
      newArr.push(arr2[i]);
    }
    return newArr;
  }

  console.log(mixTwoArrays([1,2,3],[4,5,6]));
