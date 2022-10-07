function vowelsAndConsonants(s) {
    for( const i of s) {
        if(['a', 'e', 'i', 'o', 'u'].includes(i)) {
            console.log(i)
        }
    }
    for (const i of s) {
        if(!['a', 'e', 'i', 'o', 'u'].includes(i)) {
            console.log(i)
        }
    }
}
vowelsAndConsonants("javascriptloops")

function    vowelsAndConsonants2 (s) {
    for (const i of s) {
        if (s[i]==="a" || s[i]==="e" || s[i]==="i" || s[i]==="o" || s[i]==="u") {
             console.log(i)
        }
    }
    for (const i of s) {
        if (!s[i]==="a" || s[i]==="e" || s[i]==="i" || s[i]==="o" || s[i]==="u") {
            console.log(i)
        }
    }
}
vowelsAndConsonants2("javascriptloops")
