function plusMinus(arr) {
    let plus=0;
    let minus=0;
    let zero=0;
    for (let i= 0; i < arr.length; i++) {
        if (arr[i]>0  ) {
            plus++;           
        } else if (arr[i]<0)  {
            minus ++;          
        } //else zero++;  
    }
    zero = arr.length - plus - minus;
    let num1 = plus / arr.length;
    let n = num1.toFixed(6);
    let num2 = minus / arr.length;
    let n2 = num2.toFixed(6);
    let num3 = zero / arr.length;
    let n3 = num3.toFixed(6);
    console.log(n);
    console.log(n2);
    console.log(n3);
}
plusMinus([-4, 3,-9,0,4,1]);
