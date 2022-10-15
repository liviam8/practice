//Strigből kellett a tripleteket (3 egymást követő azonos) megszámolnom.

function triplets (string) {
    let array=[];
    array=string.split('');
    let counter=0;
    for (let i=0; i<array.length; i++) {
        if(array[i]===array[i+1] && array[i]===array[i+2])
        counter++
    }
    return counter
}
console.log(triplets('ttteegggkkkssjjj'))