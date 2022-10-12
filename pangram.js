function pangram(s){

const alphabet=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
s=s.toLowerCase();
for(let i=o; i<alphabet.length; i++) {
    if(!s.includes(alphabet[i])) {
        return 'not pangram';
    }
} return pangram;
}
pangram('We promptly judged antique ivory buckles for the next prize')
