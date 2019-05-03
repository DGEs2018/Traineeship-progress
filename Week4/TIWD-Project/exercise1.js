// EXERCISE 1

// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars.
// Write a function that takes a string and returns the longest word.

const sentence1 = 'guide your learning through pain';
// const findLongest = function() {}

const longestWord = function(sentence1) {
	const splittedSent = sentence1.split(' ');
	let maxLength = 0;
	let forNowLongest = '';
	/* for (let i = 0; i < splittedSent.length; i++) {
		// create a variable to assign the temporarily longest word
		let forNowLongest = splittedSent[0];
		// compare the temp. longest word to the following ones
		if (forNowLongest <= splittedSent[i].length) {
			forNowLongest = splittedSent[i];
		}
	} */
	for (let i = 0; i < splittedSent.split(''); i++) {
		if (splittedSent > maxLength) {
			forNowLongest = word;
			maxLength = word.length;
		}
	}
	return forNowLongest;
};
console.log(longestWord(sentence1)); // true
