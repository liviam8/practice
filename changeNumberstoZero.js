//Write a function that takes a matrix of numbers as a parameter and returns a matrix.
//The function should zero out every element that is not on the edge of the matrix. See the examples.
 function changeNumberstoZero(matrix) {
    for (let i= 0; i < array.length; i++) {
    let transformedmatrix=[];
    for (let i= 0; i< matrix.length; i++) {

        const row = matrix[i];
        if (i===0 || i===matrix.length-1){
            transformedmatrix.push(row)
        } else { 
            let transformedrow=[];
            for (let j = 0; j < row.length; j++) {
            const element = row [j];
            if (j===0 || j===row.length-1) {
                transformedrow.push(element);
            } else {
                transformedrow.push(0);
            }
        }
        transformedmatrix.push(transformedrow);

    }        
    }
    return transformedmatrix;

}

  console.log(changeNumberstoZero([[1, 5, 3],[2, 6, 4],[8, 6, 9],]))
}
