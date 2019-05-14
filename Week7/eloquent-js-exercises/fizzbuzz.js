/*
Write a program that prints all the numbers 1 to 100, instead of the numbers themselves,
for numbers divisible by 3 "Fizz", divisible by "Buzz", divisible by both "FizzBuzz", 
whereas for those that don't fulfill the above conditions, just the number itself.
 */

function fizzBuzz(num) {
	for (let num = 0; num < 100; num++) {
		if (num % 3 === 0) {
			console.log('Fizz');
		} else if (num % 5 === 0) {
			console.log('Buzz');
		} else if (num % 3 === 0 && num % 5 === 0) {
		console.log('FizzBuzz');
		} else {
		console.log(num);
		}
	}
}

console.log(fizzBuzz(3)); // divisible by 3 should therefore return Fizz
console.log(fizzBuzz(5)); // divisible by 5 should therefore return Buzz
console.log(fizzBuzz(15); // divisible by both 3 and 5 should therefore return FizzBuzz
console.log(fizzBuzz(100));