/**
 * Write a method that takes a string and returns the number of vowels
 * in the string. You may assume that all the letters are in lower case 
 * and you may treat “y” as a consonant.
 */

function vowelCounter(string) {
	// store the list of vowels in a string as a variable 'allVowels'
	const allVowels = 'aeiou';
	// convert the input to lower case.
	const stringInSmall = string.toLowerCase();
	// initialize a variable called counter at 0
	let counter = 0;
	// iterate one by one through each of the elements in the string
	for (let i = 0; i < string.length; i++) {
		// as long as one of the vowels is encountered each element in the ith position of string
		if (allVowels.indexOf(string[i]) !== -1) {
			// increment the counter by one
			counter++;
		}
	}
	// return the updated counter variable
	return counter;
}
console.assert(vowelCounter('this statement must have so many vowels'), 'incorrect');
