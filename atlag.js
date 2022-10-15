//Egy array legkisebb páratlan és legnagyobb páros számának az átlagát kellett kiszámolni.

function atlag(array) {
    let paratlan=[];
    let paros=[];
    let sortedArray=[];
    sortedArray=array.sort((a,b)=>(b-a));
    for (let i=0; i<sortedArray.length; i++) {
        if (sortedArray[i]% 2 ===1) {
            paratlan.push(array[i]);
        } else {
            paros.push(array[i])
        };
    }return (paratlan[0]+paros[paros.length-1])/2;
}
console.log(atlag([100,2,35,4,50]));