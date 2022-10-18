// 17,
// Create a function that takes an array and a number and shifts
// the values of the array by the given number like: [1, 2, 3, 4, 5] and 2 becomes [4, 5, 1, 2, 3]

function shift(array,n) {
    return [...array.slice(-n),...array.slice(0, array.length-n)];
}

function shift2(arr, n){
    while (n >= 0){
        arr.push(arr.shift());
        n--;
    }
    return arr;
}
console.log(shift([1,2,3,4,5],2));