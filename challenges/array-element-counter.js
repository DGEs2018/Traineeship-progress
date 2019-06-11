/**
 * Given an array of strings, count the number of times each string occurs and keep track of it.
 * @param {*} arr, input array
 */
// using ES6 syntax, arrow function
const elementCounter = (arr) => {
	// define and assign a variable within which to store an empty object and return that at last
	let elementHolder = {};
	// iterate one by one through every element within the input array
	for (let i = 0; i < arr.length; i++) {
		// if the keys of the ith positioned element already exists
		if (Object.keys(elementHolder).includes(arr[i])) {
			// then increment its value by one
			elementHolder[arr[i]] += 1;
		} else {
			// else assign the value 1 to the key
			elementHolder[arr[i]] = 1;
		}
	}
	// at last return the now updated elementHolder variable
	return elementHolder;
};
let input = [ 'a', 'b', 'c', 'a', 'c' ];
console.log(elementCounter(input)); // should return { a: 2, b: 1, c: 2 }
console.assert(elementCounter(input), 'incorrect'); // should print nothing if the code works, but should throw 'assertion failed: incorrect' error message if any error is encountered
