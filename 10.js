// 10.
// Create a function that takes an array of integers and returns the average of the even numbers from that array

function averageOfEvens (array) {
    sum=0;
    diveder=0;
    for (let i=0; i<=array.length; i++) {
        if (array[i] % 2 === 0) {
            sum+=array[i];
            diveder++;
        }
    } return sum/diveder;
}
console.log(averageOfEvens([1,2,3,4,5,6,7,8,9]));
