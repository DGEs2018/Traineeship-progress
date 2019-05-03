// EXERCISE 4

// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars.
// Write a function that takes two strings.
// It returns true if they are anagrams (contain the exact same letters) and false otherwise.

/*
const word1 = 'hello';
const word2 = 'eollh';
const isAnagram = function() {}
const result = isAnagram(word1, word2);
console.log(result); // true
*/
function isAnagram(word1, word2) {
	a = word1.split('').sort();
	b = word2.split('').sort();
	for (let i = 0; i < word1.length; i++) {
		if (a.length == b.length) {
			if (a[i] === b[i]) {
				console.log(true);
			}
		} else {
			return false;
		}
	}
}
