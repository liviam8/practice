
function rotate1(arr, n) {
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
  }

  return arr;
}

function rotate2(arr, n) {
  for (let i = 0; i < n; i++) {
    const firstElem = arr[0];

    for (let j = 1; j < arr.length; j++) {
      arr[j - 1] = arr[j];
    }

    arr[arr.length - 1] = firstElem;
  }

  return arr;
}

console.log(rotate2([1, 2, 3, 4, 5], 3));