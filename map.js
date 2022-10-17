// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test

function changeElements (numbers) {
   let newNumbers=[];
   newNumbers=numbers.map((e, index) => index == 8 ? e=4 : e);
   //if(index == 8 ) { e=4; } else {e};
   return newNumbers;
}
console.log(changeElements([1,2,3,4,5,6,7,8,9]));