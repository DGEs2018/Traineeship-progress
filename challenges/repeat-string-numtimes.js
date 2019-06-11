/**
 * Repeat a given string (first argument) num times (second argument). 
 * Return an empty string if num is not a positive number.
 * @param {*} str 
 * @param {*} num 
 */
function repeatStrNtimes(str, num) {
	// set up a variable as an empty string, within which to store the output
	let requiredOutput = '';
	// for the conditions where num is greater than 0 run concatenate the input to the given string
	while (num > 0) {
		requiredOutput += str;
		num--;
	}
	// then return the initially empty variable
	return requiredOutput;
}

// second way, using recursion
function repeatStrNtimes2(str, num) {
	if (num <= 0) {
		return '';
	}
	if (num === 1) return str;
	else str + repeatStrNtimes2(str, num - 1);
}

console.log(repeatStrNtimes2('abc', 3)); // 'abcabcabc'
// console.assert(repeatStrNtimes2('abc', 3), 'incorrect'); // should print nothing if correct, but should throw 'assertion failed: incorrect' if any error in the code occurred

console.log(repeatStrNtimes2('abc', -1)); // ''
// console.assert(repeatStrNtimes2('abc', -1), 'incorrect'); // should print nothing if correct, but should throw 'assertion failed: incorrect' if any error in the code occurred

console.log(repeatStrNtimes('abc', 3)); // 'abcabcabc'
// console.assert(repeatStrNtimes('abc', 3), 'incorrect'); // should print nothing if correct, but should throw 'assertion failed: incorrect' if any error in the code occurred

console.log(repeatStrNtimes('abc', 1)); // 'abc'
// console.assert(repeatStrNtimes('abc', 1), 'incorrect'); // should print nothing if correct, but should throw 'assertion failed: incorrect' if any error in the code occurred

console.log(repeatStrNtimes('abc', 0)); // ''
// console.assert(repeatStrNtimes('abc', 0), 'incorrect'); // should print nothing if correct, but should throw 'assertion failed: incorrect' if any error in the code occurred

console.log(repeatStrNtimes('abc', -1)); // ''
// console.assert(repeatStrNtimes('abc', -1), 'incorrect'); // should print nothing if correct, but should throw 'assertion failed: incorrect' if any error in the code occurred
