/**
 * Write a function that receives an array of two numbers as argument and 
 * returns the sum of those two numbers and all numbers between them.
 * @param {an array of two numbers} inputArr 
 */

function sumWithinRange(inputArr) {
	// find out the smallest number applying the Math.min() method
	const initial = Math.min(inputArr[0], inputArr[1]);
	// find out the biggest number applying the Math.min() method
	const final = Math.max(inputArr[0], inputArr[1]);
	// initialize the sum at the start as 0
	let addedResult = 0;
	// iterate through each from the start to end of the elements in the array
	for (let i = initial; i <= final; i++) {
		// update sum incrementally
		addedResult += i;
	}
	// return the updated value of the sum after finishing the loop
	return addedResult;
}

let arr = [ 8, 11 ];
console.log(sumWithinRange(arr)); // should return 38
console.assert(sumWithinRange(arr), 'incorrect'); // should print nothing if correct, but print 'assertion failed: incorrect' if any error in the code occurred
