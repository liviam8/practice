//https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true

function superReduceString (string) {
    for (let i=0; i<string.length; i++) {
        if (string[i]===string[i+1]) {
           console.log(string.slice(string[i],2))
        } 
    }
}

superReduceString("abba")