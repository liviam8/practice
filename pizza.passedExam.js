 function wordRectangle(string, n) {
  let result = [];
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    newString = string.slice(i, i + n);
    if (newString.length === n) {
      result.push(newString);
    }
  }
  return result;
}

console.log(wordRectangle('pizza', 3));
console.log(wordRectangle('passedExam', 5));

export default wordRectangle;