/**
 * Write a function that takees an array as an argument and produces new array with the same elements but in reverse order
 */
function reversingAnArray(array) {
	// Get ready an empty array to be filled up with the each element
	let emptyArray = [];
	// Cycle through the elements starting from the last of the index / last element backward
	for (let i = array.length - 1; i >= 0; i--) {
		// push each of the elements in the input array to the empty container
		emptyArray.push(array[i]);
	}
	// return the now 'filled' empty Array
	return emptyArray;
}

console.assert(reversingAnArray([ 'A', 'B', 'C' ]), 'Retry!');
// → ["C", "B", "A"];
/* let arrayValue = [ 1, 2, 3, 4, 5 ];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
 */
