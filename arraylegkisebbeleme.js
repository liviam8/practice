
//Array legkisebb eleme: 

function smallest(array) {
  for (let j = 0; j < array.length - 1; j++) {
    //itt kívülre kell a array.length-1, mert visszafelé megyünk
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i - 1]) {
        let current = array[i - 1];
        array[i - 1] = array[i];
        array[i] = current;
      }
    }
  }
  console.log(array); //array csökkenő sorrendben
  return array[array.length - 1];
};

console.log(
  'legkisebb szám [6,1,8,4,3,5]-ből: ' +
    smallest([6, 1, 8, 4, 3, 5])
);