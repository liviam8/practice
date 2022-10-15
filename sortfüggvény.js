//Sort növekvő sorrendben:

function sort(array){
for (let j = 0; j < array.length; j++){
    for (let i = 0; i < array.length-1; i++){ //1. végigmegyünk az array-n, (összehasonlítani akarunk majd a következővel, ezért -1)
      if (array[i] > array [i + 1]) {         //és összehasonlítjuk az i-edik elemet az utána jövővel
        let current = array[i + 1];           // beállítjuk aktuálisnak az i+1-et
        array[i + 1] = array[i];              // majd ez lesz utána az i-edig elem
        array[i] = current;                   // és ezt állítjuk be aktuálisnak
      }                                       
    }                           
  }
  return array; 
};
console.log(sort([6, 1, 8, 4, 3, 5]));