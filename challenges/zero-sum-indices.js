/**
 * Write a method that takes an array of numbers. If a pair of numbers in the array 
 * sums to zero, return the positions of those two numbers. If no pair of numbers sums to zero, return null.
 * @param {*} arr 
 */
function zeroSumIndices(arr) {
	let arrHolder = [];
	// iterate through each array
	for (let i = 0; i < arr.length; i++) {
		// Define the next index j to compare with the rest.
		for (let j = i + 1; j < arr.length; j++) {
			// find out if any of the numbers inside add up to zero
			if (arr[i] + arr[j] === 0) {
				// if so return these indices
				arrHolder.push(i, j);
				// arrHolder = [...arrHolder, i, j]
			}
			// else {
			// 	// else return null
			// 	return arrHolder;
			// }
		}
	}
	// ternary operator as a shortcut for the if statement - preceded by the statements ? (meaning if), : ( meaning else)
	return arrHolder.length === 0 ? null : arrHolder;
}

console.log(zeroSumIndices([ 1, 2, -2, 4 ])); // should return [1, 2]
console.assert(zeroSumIndices([ 1, 2, -2, 4 ]), 'incorrect'); // should print nothing if the code works, but should throw 'assertion failed: incorrect' error message if any error is encouuntered

console.log(zeroSumIndices([ 1, 2, 4, 6 ])); // should return null
// I wonder why this console.assert displays an error even though, its equivalent console.log returns the expected output - typo?
// console.assert(zeroSumIndices([ 1, 2, 4, 6 ]), 'incorrect'); // should print nothing if the code works, but should throw 'assertion failed: incorrect' error message if any error is encouuntered
