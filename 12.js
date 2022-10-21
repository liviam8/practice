// 12.
// Create a function that takes a matrix (list of lists) of numbers and returns the sum of each rows as an array

function sumOfRows (matrix) {
    sum=[];
    sumOfRow=0;
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            sumOfRow+=matrix[i][j];
        }
        sum.push(sumOfRow);
        sumOfRow=0;

    } return sum;
}
console.log(sumOfRows([
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6]
  ]));