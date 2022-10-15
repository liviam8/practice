var a=[34, 35, 45, 48, 49];
var b=[48, 55];
var c=a.concat(b).sort();
console.log(c)
var res=c.filter((value,pos) => {return c.indexOf(value) == pos;} );
console.log(res)
