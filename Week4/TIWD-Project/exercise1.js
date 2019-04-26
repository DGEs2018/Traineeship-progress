// EXERCISE 1

// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars.
// Write a function that takes a string and returns the longest word.

const sentence1 = 'guide your learning through pain';
// const findLongest = function() {}
const splittedSent = sentence1.split(' ').join();

const longestWord = function(sentence1) {
	for (let i = 0; i < splittedSent.length; i++) {
		// create a variable to assign the temporarily longest word
		let forNowLongest = splittedSent[0];
		// compare the temp. longest word to the following ones
		if (forNowLongest <= splittedSent[i].length) {
			forNowLongest = splittedSent[i];
		}
	}
	return forNowLongest;
};
console.log(longestWord(sentence1)); // true
