/**
 * create a function that takes an integer n > 1 and returns an array with all of the integers divisors
 * (except for 1 and the number itself), from the smallest to leargest. If the number is prime return the 
 * string'(integer)isprime'
 * @param {an integer(number) greater than zero} inputnum 
 */
function divisors(inputnum) {
	// get an empty holder ready to hold results in
	const resultHolder = [];

	// iterate from 2 through to one less than the number itself
	for (let i = 2; i < inputnum; i++) {
		// console.log(inputnum[i]);
		// if integer is divisible by the current num then
		if (inputnum % i === 0) {
			// push that to resultHolder
			resultHolder.push(i);
			// else return '(input)isprime'
		}
	}
	// if integer isn't divisible, hence no value pushed
	if (resultHolder.length === 0) {
		// return the message below
		return `${inputnum} is prime`;
	}
	// return the now divisors holding value
	return resultHolder;
}

console.log(divisors(28)); // should return [2, 4, 7, 14]

console.assert(divisors(28), 'incorrect'); // should return nothing if the code works good, but should throw an 'assertion failed: incorrect' error if any error in code is encountered

console.log(divisors(26)); // should return [2, 13]
console.assert(divisors(26), 'incorrect'); // should return nothing if the code works good, but should throw an 'assertion failed: incorrect' error if any error in code is encountered

console.log(divisors(13)); // should return '13 is prime'
console.assert(divisors(13), 'incorrect'); // should return nothing if the code works good, but should throw an 'assertion failed: incorrect' error if any error in code is encountered
