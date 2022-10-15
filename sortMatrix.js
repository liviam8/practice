let M= [[1, -4, -1],
[  8,  4,  7], 
[  -20, 10, 12]];

function up_down_col_sort( mat, n) 
{
    let arr = new Array(n * n);
    let k = 0;

    //copy matrix to array
    for (let i = 0; i < n; i++){
        for (let j =0; j < n; j++){
            arr[k++] = mat[i][j];
        }
    }

    //sort array
    for (let i = 0; i < k; i++) {
        for (let j = i + 1; j < k; j++) {
            console.log(arr[i]+ " : " + arr[j])
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    //move array to matrix
    let kk = 0;
    for(let i = 0; i < n; i++){
        // if remainder is not 0, change direction of assignment
        if ((i % 2) === 0){
            for (let j = 0; j < n; j++){
                mat[j][i] =  arr[kk++];
            }
        } else {
            for (let j = n-1; j >= 0; j--){
                mat[j][i] =  arr[kk++];
            }
        }
    }
    
    return mat;
}

// function to print the given matrix
function printMat(mat, n)
{
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < n; j++)
            str = str + mat[i][j] + " ";
        console.log(str);
    }
}

console.log("Original Matrix");
printMat(M, 3);
M = up_down_col_sort(M, 3); 
console.log("Sorted Matrix");
printMat(M, 3);
