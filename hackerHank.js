// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?isFullScreen=true

function hackerrankInString(s) {
   
    const hackerHank = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a','n', 'k'];
    let sArr = s.split('');
    let contains = true;

    for (let i = 0; i< hackerHank.length; i++){
        var indexOfLetter = sArr.indexOf(hackerHank[i]);
        console.log(`hackerhank[${i}]:${hackerHank[i]}, index in ${sArr.join('')} is ${indexOfLetter}`);
        if (indexOfLetter < 0){
            contains = false;
            break;
        }
        sArr = sArr.slice(indexOfLetter+1);
        
    }

    return contains ? 'YES' : 'NO'; 
}

function hackerrankInString2(s) {
    const hackerHank = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a','n', 'k'];

    for(let index = 0; index < s.length; index++){
        for(let i = 0; i < hackerHank.length; i++){
            if(s[index] === hackerHank[i] && i === 0){
                hackerHank.splice(i, 1);
                console.log(hackerHank);
            }
        }
    }
    return hackerHank.length === 0 ? 'YES' : 'NO'
}

console.log(hackerrankInString2('hereiamstackerrank'));

