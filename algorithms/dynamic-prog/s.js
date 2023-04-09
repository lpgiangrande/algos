/**
 * Fibonacci
 * 
 * The Fibonacci sequence is a series of numbers 
 * in which each number is the sum of the two preceding ones, 
 * usually starting with 0 and 1. 
 * So the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on.
 */

// iterative implementation : 
function fibonacciIterative(n) {
    if (n <= 1) {
      return n;
    }
  
    let fib = 1;
    let prevFib = 1;
    /*
    The reason why fib and prevFib are both initialized to 1 is because 
    the first two numbers in the Fibonacci sequence are 0 and 1. 
    By initializing fib and prevFib to 1, 
    the loop can start generating the sequence from the third number onward.
    */
  
    for (let i = 2; i < n; i++) {
      let temp = fib;
      fib = fib + prevFib;
      prevFib = temp;
    }
  
    return fib;
  }
  console.log(fibonacciIterative(8)) //21


  // recursive implementation :
function fibonacciRecursive(n) {
  // base case
  if (n <= 1) {
    return n;
  }

  // recursive case
  // calculate the sum of the previous two numbers in the sequence
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(8)) //21

/*
In this implementation of the Fibonacci sequence, 
we have a base case and a recursive case. When n is less than or equal to 1, 
we simply return n. This is because the first two numbers in the Fibonacci 
sequence are 0 and 1, so the function needs to return the input value when n is either 0 or 1.

For any value of n greater than 1, we call fibonacciRecursive recursively with two arguments: 

n - 1 and n - 2. These represent the two previous numbers in the sequence, 


which we then add together to get the current number. 
The recursion continues until the base case is reached, 
at which point the function starts to unwind and return the Fibonacci sequence up to the input value.
*/