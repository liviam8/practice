function search(array, t) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === t) {
            console.log(array[i])
            return i
        }
    }
    return -1;
}
console.log(search([1, 2, 3, 4, 5, 6, 7,], 1))
console.log(search([1, 2, 3, 4, 5, 6, 7,], 7))
console.log(search([1, 2, 3, 4, 5, 6, 7,], 4))

