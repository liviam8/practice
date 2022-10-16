// - Create a variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

function sumElements (numbers) {
    let sum=0;
    for (let i=0; i<numbers.length; i++) {
        sum=sum+numbers[i];
    } return sum;
}
console.log(sumElements([54, 23, 66, 12]));