/**
 * Write a method that takes in a number and returns true if it is a power of 2.
 * Otherwise, return false.
 * @param {*} num 
 */
const isPowerOfTwo = (num) => {
	// if the number is 1, return true, as any number to the power of zero is 1
	if (num === 1) {
		return true;
	} else if (num < 1) {
		// for negative numbers return false
		return false;
	} else return isPowerOfTwo(num / 2); // else use the recursive function to keep dividing the number
	// repeatedly, meaning this would only be valid for numbers of just powers of two
};
/* function isPowerOfTwo(num) {
	return num == 1 ? true : num < 1 ? false : isPowerOfTwo(num / 2);
} */

console.log(isPowerOfTwo(32)); // should return true
console.assert(isPowerOfTwo(32), 'incorrect'); // should print nothing if correct, but should throw 'assertion failed: incorrect' if any error in the code occurred

console.log(isPowerOfTwo(15)); // should return false
// console.assert(isPowerOfTwo(15), 'incorrect'); // should print nothing if correct, but should throw 'assertion failed: incorrect' if any error in the code occurred
