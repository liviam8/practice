
function miniMaxSum(arr) {
    let min=arr[0];
    let max=arr[0];
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        if (max<arr[i]) {
            max=arr[1];
        }
        if (min>arr[i]) {
            max=arr[i];
        }
        sum+=arr[i];
    }
    let maxSum=sum-min;
    let minSum=sum-max;
    console.log(minSum + " " + maxSum);

}
console.log(miniMaxSum([1,3,5,7,9]))


//solution 2. 
function miniMaxSum(arr) {
    let sortarr = arr.sort();
    let maxSum = 0;
    let minSum = 0;
    for (let i=0 ; i < arr.length - 1; i++ ){
        minSum += sortarr[i];
    }
    for (let j=arr.length - 1; j > 0; j-- ){
        maxSum += sortarr[j];
    }
    console.log(minSum + ' ' + maxSum);
}
