/*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that 
are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

function fizzBuzz(num) {
	for (let num = 0; num < 100; num++) {
		if (num % 3 === 0) {
			console.log('Fizz');
		} else if (num % 5 === 0) {
			console.log('Buzz');
		} else num % 3 === 0 && num % 5 === 0;
		console.log('FizzBuzz');
	}
}

console.log(fizzBuzz(3)); // divisible by 3 should therefore return Fizz
console.log(fizzBuzz(5)); // divisible by 5 should therefore return Buzz
console.log(fizzBuzz(15); // divisible by both 3 and 5 should therefore return FizzBuzz
console.log(fizzBuzz(100));