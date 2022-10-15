
//Array legkisebb eleme: 

function smallest(array) {
 
  for (let i=0; i<array.length; i++) {
    for (let j=i+1; j<array.length; j++) {
      if(array[i]>array[j]) {
        let temp=array[i];
        array[i]=array[j];
        array[j]=temp;
      }
    }return array[0];
  } 
} console.log(smallest([5,3,6,7]))