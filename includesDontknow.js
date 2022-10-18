//Includes 

function includes(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    for (let j = 0; j < array2.length; j++) {
      const element2 = array2[j];
      if (element === element2) {
        result.push(element);
      }
    }
  }
  return result;
}

console.log(
  includes([5, 9, 4, 66, 44, 7], [88, 4, 8, 9, 5])
);
