// 1
//Create a function that takes a matrix (list of lists) of numbers and sums all the numbers.

function sumMatrix(listoflists) {
    sum=0;
    for (let i=0; i<listoflists.length; i++ ) {
        for (let j=0; j<listoflists[i].length; j++)
        sum+=listoflists[i][j];
    }
    return sum;
}
console.log(sumMatrix([
    [1, 2, 3, 4],
    [2, 3, 4, 5]
  ]));