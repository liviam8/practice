 // - Create a two dimensional list dynamically with the following content.
 //   Note that a two dimensional list is often called matrix if every
 //   internal list has the same length.
 //   Use a loop!
 //
 //   1 0 0 0
 //   0 1 0 0
 //   0 0 1 0
 //   0 0 0 1
 //
 //   Its length should depend on a variable
 //  
 // - Print this two dimensional list to the output


 
 function oneDiagonal (n) {
    let matrix=[];
    for (let i=0; i<n; i++ ) {
        matrix[i]=[];
        for (let j=0; j<n; j++) {
            if(i===j) {
                matrix[i][j]=1;
            } else matrix[i][j]=0;
        }
    } return matrix;
 }
 console.log(oneDiagonal(4));