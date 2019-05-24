/**
 * Write a method that takes an integer n and returns its factorial: n*(n-1)*(n-2)*...*2\*1. 
 * Assumption n >= 0.
 * @param {*} num - number parameter
 */
function factorial(num) {
	//initialize a value to hold the required output, which serves to succinctly update the multiplication
	let output = 1;
	// if (factorial ==)
	for (let i = 1; i <= num; i++) {
		output = output * i;
	}
	return output;
}
console.log(factorial(5)); //should return 120
console.log(factorial(7)); //should return 5040

console.assert(factorial(5) === 140, 'Not correct'); // as the first comparison is false (deliberately for demonstration), 'Assertion failed: Not correct' message is printed.
