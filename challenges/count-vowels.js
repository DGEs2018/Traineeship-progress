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
console.log(vowelCounter2('this statement has so many vowels')); // should return 9
console.assert(vowelCounter('this statement has so many vowels'), 'incorrect'); //should not print nothing if the program works, but returns 'assert failed: incorrect if there's an error

// second way storing the vowels as an array and using the .includes method
function vowelCounter2(input) {
	const listOfVowels = [ 'a', 'e', 'i', 'o', 'u' ];
	let counter2 = 0;
	let lowerCaseInput = input.toLowerCase();
	for (let element of lowerCaseInput) {
		if (listOfVowels.includes(element)) {
			counter2++;
		}
	}
	return counter2;
}
console.log(vowelCounter2('checkout how many vowels are here!')); // should return 11
console.assert(vowelCounter2('checkout how many vowels are here!'), 'incorrect'); //should not print nothing if the program works, but returns 'assert failed: incorrect if there's an error
