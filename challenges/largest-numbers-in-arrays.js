/**
 * Write a function that receives an array with four nested array. 
 * The function returns an array consisting of the largest number from each provided sub-array.
 */
function largestOfEachArray(array) {
	// create an empty array wherein to collect largest of each
	let arrayCollector = [];
	// iterate through each of the
	for (let i = 0; i < array.length; i++) {
		// fill in the collector array with the maximum number out of each
		arrayCollector.push(Math.max(...array[i]));
	}
	// return the now filled
	return arrayCollector;
}
let arrayInput = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
console.log(largestOfEachArray(arrayInput)); // should return [3, 6, 9]
console.assert(largestOfEachArray(arrayInput), 'incorrect'); // should print nothing if the code works, but should throw 'assertion failed: incorrect' error message if any error is encouuntered
