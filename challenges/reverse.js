/*
Write a method that will take a string as input, and return a new string with the same letters in reverse order.
 */

function reverse(string) {
	// start reading the characters from back to front
	let reverseHolder = ''; // iterate over individual characters
	for (let i = string.length - 1; i >= 0; i--) {
		//succintly keep updating the previous input while iterating over each characters
		reverseHolder = reverseHolder + string[i];
	}

	//return the last reversed one
	return reverseHolder;
}

console.log(reverse('Howdy')); // "ydwoH"
console.log(reverse('Dawit')); // "tiwaD"
