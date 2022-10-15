// Split

function split(string, splitParam) {
  const array = [''];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== splitParam) {
      array[array.length - 1] += string[i];
    } else {
      array.push('');
    }
  }
  return array;
};
console.log(split('Laura,Boldizsár,Henrik',','))
