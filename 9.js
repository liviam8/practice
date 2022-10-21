// 9.
// Create a function that takes an array of integers and retunrs the biggest from each of its second elements like:
// [1, 3, 8, 6, 7, 4] would return 6

function returnsBiggest (array) {
   array.sort();
   let withoutDuplication=[];
   for (let i=0; i<array.length; i++) {
   if(!withoutDuplication.includes(array[i])) {
    withoutDuplication.push(array[i]);
   }
} return withoutDuplication[withoutDuplication.length-1];
}
console.log(returnsBiggest([7,6,9,8,7,9,8]));
