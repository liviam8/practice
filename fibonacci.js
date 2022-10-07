function fibonacci(n) {
    const fib=[0,1]

    for (i=2; i<n; i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))


function recursiveFibonacci(n) {
    if (n <2 ) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci (n-2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(6))