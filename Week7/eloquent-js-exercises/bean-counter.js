/*
 Write a function that counts Bs, takes a string as its only argument,
 returns a number that indicates how many uppercase Bs are contained.
 */
function bCounter(input) {
	// get the characters, and see if they are similar
	let upperCaseHolder = '';
	for (let i = 0; i < input.length; i++) {
		if (input[i].toUpperCase()) {
			upperCaseHolder += input[i];
		}
		return upperCaseHolder.length;
	}

	// count the number of this

	// return result....

	//
}
bCounter('Babyboy');
