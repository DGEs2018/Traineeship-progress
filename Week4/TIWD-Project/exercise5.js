// EXERCISE 5

// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars.
// Write a function that takes a number.
// Print all the numbers until that one.
// If the number going to be printed is multiple of 3. Print `Fizz` not the number.
// If the number going to be printed is multiple of 5. Print `Buzz` not the number.
// If the number going to be printed is multiple of 3 and 5. Print `FizzBuzz` not the number.

const fizzBuzz = function() {
	for (let i = 1; i <= 10; i++) {
		const multipleOf3 = i % 3 == 0;
		const multipleOf5 = i % 5 == 0;
		if (multipleOf3) {
			console.log('Fizz');
		} else if (multipleOf5) {
			console.log('Buzz');
		} else if (multipleOf3 && multipleOf5) {
			console.log('Fizzbuzz');
		} else {
			console.log(i);
		}
	}
};
fizzBuzz(10);
// It should print:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
