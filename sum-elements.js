// - Create a variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

function sumElements (numbers) {
    let sum=0;
     for (let i=0; i<numbers.length; i++) {
        sum=numbers[1]+numbers[2];
         } return sum;
        //  numbers.map((e,i) => sum = e[1]+e[2]);

}
console.log(sumElements([54, 23, 66, 12]));