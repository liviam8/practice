function camelcase(s) {
// const wordRegex = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
// const result = s.match(wordRegex);
let array=s.split("");
let count=1;
for (let i=0; i<array.length; i++) {
    if (array[i]===array[i].toUpperCase()) {
        count++
    }
}
return count
}
console.log(camelcase("saveChangesInTheEditor"));