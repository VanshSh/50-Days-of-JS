//Return the N-th value of the Fibonacci sequence

console.log("*** Day 11: Fibonacci ***");

function fibonacci(n) {
  // write your solution here
  if (n <= 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)
