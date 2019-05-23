/*
Write  a program that sums the range between two number inputs.
 */
function numRangeArray(from, to) {
	let arrayOfNumRange = [];
	for (let i = from; i <= to; i++) {
		arrayOfNumRange.push(i);
	}
	return arrayOfNumRange;
}

console.log(numRangeArray(6, 8)); // should return [6, 7, 8]

/*
Problem modified to list with steps
*/

function numRangeArray(from, to) {
	let arrayOfNumRange = [];
	for (let i = from; i <= to; i += 2) {
		arrayOfNumRange.push(i);
	}
	return arrayOfNumRange;
}

console.log(numRangeArray(2, 8)); // should return [2, 4, 6, 8]

/*
Modify the problem so that it returns the sum of each element within a given array. 
*/

function sumNumsInArray(array) {
	let arraySum = 0;
	for (let each of array) {
		arraySum = arraySum + each;
	}
	return arraySum;
}

console.log(sumNumsInArray([ 1, 2, 4, 5, 6 ])); // should return 18
