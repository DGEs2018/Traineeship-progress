/*
Problem description
Write a method that takes in an integer (num) and returns 
the sum of all integers between zero and num, up to and including num.
*/

function sumNums(num) {
	// initialize the sum starting from zero
	let rangeTotalSum = 0;
	// iterate through all the numbers, and increment all the way to the last number
	for (i = 1; i <= num; i++) {
		// update the initial sum with the consecutive numbers
		rangeTotalSum += i;
	}
	return rangeTotalSum;
}

sumNums(9); // should return 45
sumNums(12); // should return 78
