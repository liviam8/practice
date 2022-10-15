let matrixSize = 6;
	let matrix=[];
	let i=0;
    let j=0;
	
	
	for(i = 0; i < matrixSize; i++){
        matrix[i] = [];
	    for (j = 0; j < matrixSize ; j++){
	       if(j == matrixSize - i -1 ){
                matrix[i][j] = 1;
            }
            else {
                matrix[i][j] = 0;
            }
	    }
	    console.log(matrix[i]);
	  }
	
	//console.log(matrix);