//https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true

// function superReduceString (string) {
//     var continueReducing = true;
//     let s=string.split('')
//     while(continueReducing) {
//         continueReducing=false;

//         for (let i=0; i<s.length; i++) {
//             if (s[i]===s[i+1]) {
//                 s = s.splice(i,2);
//                 console.log(s);
//             i++;
//             continueReducing=true;
//             } 
//         }
//     }
// }


function superReducedString(input) {
    //Enter your code here
    var continueReducing = true;
    var s = input.split('');
    
    while(continueReducing) {
        continueReducing = false;
        
        for(var i = 0; i < s.length; i++) {
            if (s[i] == s[i + 1]) {
                s[i] = '';
                s[i + 1] = '';
                i++;
                continueReducing = true;
                console.log(s);
            }
        }

        s = s.join('').split('');
    }
    
    return s.length == 0 ? 'Empty String' : s.join('');
} 

console.log(superReducedString("abbaaaabccddd"));
