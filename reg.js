function camelcase(s) {
const wordRegex = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
const result = s.match(wordRegex);
return result.length
}
console.log(camelcase("saveChangesInTheEditor"));
