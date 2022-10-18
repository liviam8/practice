'use strict';

let lineCount= 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
function triangle (n) {
    for (let i=0; i<n; i++) {
        let str="";
        for (let j=0; j<=i; j++) {
           str+="*";
        } 
        console.log(str);
    } 
}
//triangle(4);

//    *
//   **
//  ***
// ****

function triangle2 (n) {
    let mat = []
    for (let i=0; i<n; i++) {
        let str = "";
        str = str.padStart(n-1-i," ");
        for (let j=0; j<=i; j++) {
            str+= "*";
        }
        console.log(str);
    }
}

function triangle3 (n) {
    for (let i=0; i<n; i++) {
        let str = "";
        for (let j=0; j<n; j++) {
            if ((n-1-j) > i){     
                str+= " ";
            }else str+= "*";
        }
        console.log(str);
    }
}

triangle2(4);