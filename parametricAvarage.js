// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3


function average(n) {
    Sum=0;
    for(let i=0; i<=n; i++) {
        Sum+=i;
    }
    console.log("Sum is: " + Sum +" and the average is: " + Sum/n);

}
average(5);