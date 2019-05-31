/**
 * create a function that takes an integer n > 1 and returns an arrauy with all of the integers divisors
 * (except for 1 and the number itself), from the smallest to leargest. If the number is prime return the 
 * string'(integer)isprime' ()
 */

function divisors(inputnum) {
	// get an empty holder ready to hold results in
	const resultHolder = [];

	// iterate from 2 through to one less than the number itself
	for (let i = 2; i < inputnum; i++) {
		// console.log(inputnum[i]);
		// int. divisible by the current num ? push that to resultHolder
		if (inputnum % i === 0) {
			resultHolder.push(i);
		}
	} // else return '(input)isprime'
	if (resultHolder.length === 0) {
		return `${inputnum} is prime`;
	}
	return resultHolder;
}

console.assert(divisors(28), 'review please'); // should return [2, 4, 7, 14]
console.assert(divisors(26), 'review please'); // should return [2, 13]
console.assert(divisors(13), 'review please'); // should return '13 is prime'
