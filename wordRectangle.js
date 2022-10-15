function wordRectangle(text, n){
    const arr=text.split("");
    for (let i = 0; i < arr.length; i++) {
        arr.push(arr.slice(i,i+3));
    }
    return arr;
}
console.log(wordRectangle(("pizza"),3));
