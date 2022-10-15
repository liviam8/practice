function diagonalDifference(arr) {
    let j=arr.length - 1;
    let a=0;
    let b=0;
    for (let i= 0; i < arr.length; i++) {
        a+=arr[i][i];
        b+=arr[i][j--];
        //console.log(arr[i][i] + " : " + arr[i][j]);
        //j--;
    }
    return a > b ? (a -b) : (b-a);
}
console.log(diagonalDifference ([[1,2,3],[4,5,6],[9,8,9]]));