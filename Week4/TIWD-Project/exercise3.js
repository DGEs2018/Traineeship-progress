// EXERCISE 3

// Write a function that takes numbers and a minimum.
// It returns only those numbers greater than the minimum.

const input = [ 2, 4, 6, 7, 10, 15 ];
const min = 8;
const greaterThan = function(numbers, maxNumber) {
	return input.filter(function(number)) {
		return number > maxNumber ;
	}
/* 	for (let i = 0; i < input.length; i++) {
		if (input[i] > min) {
			console.log(input[i]);
		}
	} */
	return greaterThan();
};
const largerNumbers = greaterThan(input, min);
console.log(largerNumbers); // [10, 15]
