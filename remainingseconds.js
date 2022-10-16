let currentHours = 14;
let currentMinutes = 34;
let currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables



currentHours=currentHours*60*60;
console.log(currentHours);
currentMinutes=currentMinutes*60;
console.log(currentMinutes);
let seconds= currentHours + currentMinutes + currentSeconds;
let remainingSeconds= 86400 - seconds;
console.log(remainingSeconds);