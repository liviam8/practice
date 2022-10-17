
// Write a program that prints the numbers from 1 to 100
// but for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

 function fizzBuzz() {
  // write your code here for Gradescope testing
  for (let i=0; i<=100; i++) {
    if(i%3===0) {
        console.log(i+"Fizz")
    } else if(i%5===0) {
        console.log(i+"Buzz")
    } else ((i % 3 === 0) && ( i % 5 === 0)); {
        console.log(i+"FizzBuzz");
    }
  }
}

fizzBuzz()