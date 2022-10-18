

// Join ["ab", "cde", "fg"] -> "abcdefg"

function join(array) {
    let string = '';
    for (let i = 0; i < array.length; i++) {
        string += array[i];       
    } return string;    
};
console.log(join(['ab', 'cde', 'fg']));


