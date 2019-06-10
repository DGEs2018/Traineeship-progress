/*
*Write a method that takes an array of numbers. If a pair of numbers in the array 
*sums to zero, return the positions of those two numbers. If no pair of numbers sums to zero, return null.
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
				return arrHolder.push([ i, j ]);
			} else {
				// else return null
				return arrHolder;
			}
		}
		return arrHolder;
	}
}

console.log(zeroSumIndices([ 1, 2, -2, 4 ]));
console.log(zeroSumIndices([ 1, 2, 4, 6 ]));
