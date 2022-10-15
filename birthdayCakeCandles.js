function birthdayCakeCandles(candles) {
    let sortCandles = candles.sort(function(a, b){return a-b});
    console.log(candles);
    let maxValue=sortCandles[0];
    let numberOfMaxValue=1;
    for (let index = 0; index < sortCandles.length; index++) {
        console.log(maxValue + ":" + sortCandles[index])
        if (maxValue>=sortCandles[index]) {
            numberOfMaxValue++;
        } else { 
            maxValue=sortCandles[index];
            numberOfMaxValue = 1;
            console.log("NewMax: " + maxValue + " # " + numberOfMaxValue);
        }
    } 
    return numberOfMaxValue;
}

console.log(birthdayCakeCandles([1, 2, 3, 3, 100000000, 100000000, 1000000]));