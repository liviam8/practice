// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?isFullScreen=true

function hackerrankInString(s) {
   
    const hackerHank = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a','n', 'k'];

    for(const el of s){
        for(let i = 0; i < hackerHank.length; i++){
            if(el === hackerHank[i] && i === 0){
                hackerHank.splice(i, 1);
            }
        }
    }
    return hackerHank.length === 0 ? 'YES' : 'NO'
}
