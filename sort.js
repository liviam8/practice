function sort(array) {
    let swapped
    do {
        swapped = false
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

console.log(sort([8, 23, 45, 6, 7]))