'use strict';

let a= 24;
let output1= 0;

// if a is even increment output1 by one
if (a%2===0) {
    output1++;
    console.log("a is even");
} else console.log("a is odd");

console.log(output1);

let b = 25;
let output2 = '';

if ((b>10) && (b<20)) {
    output2="Sweet"
} else if(b<10) {
    output2="Less"
} else output2="more"
// if b is between 10 and 20 set output2 to "Sweet!"
// if less than 10 set output2 to "Less!",
// if more than 20 set output2 to "More!"

console.log(output2);

let c = 123;
let credits = 100;
let isBonus= false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

console.log(c);

let d =  8;
let time = 120;
let output3 = '';

// if d is dividable by 4
// and time is not more than 200
// set output3 to "check"
// if time is more than 200
// set output3 to "Time out"
// otherwise set output3 to "Run Forest Run!"

console.log(output3);