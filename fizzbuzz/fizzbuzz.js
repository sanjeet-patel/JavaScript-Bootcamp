// Define a function called fizzBuzz using ES6 arrow function syntax
const fizzBuzz = () => {
    // Use a for loop to iterate through numbers from 1 to 100 (inclusive)
    for (let num = 1; num <= 100; num++) {
      // Check if the current number is divisible by both 3 and 5
      if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz"); // If yes, print "FizzBuzz"
      }
      // Check if the current number is divisible by 3
      else if (num % 3 === 0) {
        console.log("Fizz"); // If yes, print "Fizz"
      }
      // Check if the current number is divisible by 5
      else if (num % 5 === 0) {
        console.log("Buzz"); // If yes, print "Buzz"
      }
      // If none of the above conditions are met, print the current number
      else {
        console.log(num);
      }
    }
  };
  
  // Call the fizzBuzz function to print the FizzBuzz sequence
  fizzBuzz();
  