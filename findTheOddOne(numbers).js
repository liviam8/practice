function findTheOddOne(numbers) {
    const uniqueNumbers = new Set(numbers);

    for (const numberToFind of uniqueNumbers) {
        let count = 0;

        for (const num of numbers) {
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