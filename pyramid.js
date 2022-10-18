
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
 function drawPyramid(lineCount) {
  // write your code here for Gradescope testing
  for (let i=0; i < lineCount; i++){
    let str = "";
    for (let j=0; j< lineCount; j++){
        //str+= (lineCount -1 -j <= i) ? "*" : " ";
        if (lineCount - 1 - j <= i) {
            str+= "*";
        }else{
            str+=" ";
        }
    }
    // for (let j = 0; j < i; j++){
    //     str+= "*";
    // }
    console.log(str);
  }
}

function matrixWrite(mat) {
    for(let i=0; i< mat.length; i++){
        let str ='';
        for(let j = 0; j < mat.length; j++){
            str+= mat[i][j] + ' ';;
        }
        console.log(str);
    }
}

const matrix = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],]

drawPyramid(4);
//matrixWrite(matrix);