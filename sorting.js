function insertionSort1(arr) {
    // Write your code here
for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr.length-1; j++) {
        if (arr[j]> arr[j+1]) {
            let current=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=current;
        }
    }
}

return arr;
}
console.log(insertionSort1([2,4,6,8,3]))