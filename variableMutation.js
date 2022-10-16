'use strict';
// make it bigger by 10
let a = 3;
a=a*10;
console.log(a);


// make it smaller by 7
let b= 100;
b=b-7;
console.log(b);

// double c's value
let c= 44;
c*=2;
console.log(c);
 
// divide d's value by 5
let d= 125;
d/=5;
console.log(d);

// what's the cube of e's value?
let e= 8;
e*=e;
console.log(e);

// tell if f1 is bigger than f2 (as a boolean)

function bigger (f1,f2) {
    if(f1>f2) {
        return true;
    } return false;
}

console.log(bigger(123,345))

// tell if the double of g2 is bigger than g1 (pras a boolean)

function theDoubleIsBigger(g1,g2) {
    if((2*g2)>g1) {
        return true;
    } return false;
}

console.log(theDoubleIsBigger(350,200))

// tell if 11 is a divisor of h (as a boolean)

function divisor (h) {
    if (h % 11 === 0) {
        return true;
    } return false;
} 
console.log(divisor(1357988018575474))

// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

function isHigher (i1,i2) {
if  ((i1>(i2*i2)) && (i1<(i2*i2*i2))) {
    return true;
} return false;
}
console.log(isHigher(10,3));


// tell if j is divisible by 3 or 5 (as a boolean)
function divisible2(j) {
    if((j%3===0) || (j%5===0)) {
        console.log("is divisible by 3 or 5");
    } else console.log ("is not divisible");
} 
divisible2(1521);