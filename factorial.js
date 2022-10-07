function factorial(n) {
    result=1

    for(i=1; i<=n; i++){
        result=result*i
    }
    return result
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))


function recursiveFactorial(n) {
    if(n===0){
        return 1
    }
    return n * recursiveFactorial(n-1)
}
console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))
