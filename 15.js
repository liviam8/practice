// 15.
// Create a function that takes a string and splits it to a list of two character strings like:
// "abcdef" becomes ["ab", "cd", "ef"]


function splits (array) {
    newArray=[];
    temsptring='';
    for (let i=0; i<array.length; i+=2) {
       temsptring=array[i]+array[i+1];
        newArray.push(temsptring);
    }
    return newArray;
}

console.log(splits("abcdefgh"));