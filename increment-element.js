// -  Create a variable named `numbers` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element directly (without loops and without array methods: forEach, map, ...)
// -  Log the third element to the console


function inremenetElement (numlist) {
    const incrementedNumber=numlist[2]++;
  
    console.log(incrementedNumber);
} 


inremenetElement([1,2,3,4,5]);


const számlista = [1, 2, 3, 4, 5];
számlista.push(számlista[2]++);
console.log(számlista[2]);