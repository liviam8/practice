const p = '2022-11-30T20:00:00Z';
const p2= p
    .replaceAll('T',' ')
    .replaceAll('Z','');


console.log(p2);