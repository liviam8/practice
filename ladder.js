let matrixSize = 6;
	let i=0;
    let j=0;
	
	
	for(i = 0; i < matrixSize; i++){
        let str = '';
	    for (j = 0; j < matrixSize ; j++){
	       if(j <= i){
                str = str + '#';
            }
            else {
                str = str + ' ';
            }
	    }
	    console.log(str);
	  }
	
	//console.log(matrix);