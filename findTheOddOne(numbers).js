function findTheOddOne(numbers) {
    const uniqueNumbers = new Set(numbers);
    // for(let i=0; i < numbers.length; i++){
    //     uniqueNumbers[i] = numbers[i];
    // }

    for (let i=0; i<uniqueNumbers.length; i++) {//const numberToFind of uniqueNumbers) {
        const numberToFind= uniqueNumbers[i];
        let count = 0;

        for (let j=0; j<numbers.length; j++) {//const num of numbers) {
           const num=numbers[i];
            if (num === numberToFind) {
                count++;
            }
        }

        if (count % 2 === 1) {
            return numberToFind;
        }
    }

    return 0;
}