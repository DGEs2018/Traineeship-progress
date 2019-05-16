/*
Write a program that prints all the numbers 1 to 100, instead of the numbers themselves,
for numbers divisible by 3 "Fizz", divisible by "Buzz", divisible by both "FizzBuzz", 
whereas for those that don't fulfill the above conditions, just the number itself.
 */

function fizzBuzz(num) {
	if (num < 1) {
		console.log('number is too small');
	} else if (num > 100) {
		console.log('number is too big');
	} else {
		if (num % 3 === 0 && num % 5 === 0) {
			console.log('FizzBuzz');
		} else if (num % 3 === 0) {
			console.log('Fizz');
		} else if (num % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(num);
		}
	}
}

fizzBuzz(3); // divisible by 3 should therefore return Fizz
fizzBuzz(5); // divisible by 5 should therefore return Buzz
fizzBuzz(15); // divisible by both 3 and 5 should therefore return FizzBuzz

// Second version, fizzbuzz all numbers

function fizzBuzzAllNumbers() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}

fizzBuzzAllNumbers();
