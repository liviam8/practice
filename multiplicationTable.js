'use strict';



// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

function multiplicationTable(n) {
    let result=0;
  // write your code here for Gradescope testing
  for (let i=0; i<=10; i++) {
    result=i*15;
    console.log(i+" * "+n+"="+result)
  }
}
multiplicationTable(15)