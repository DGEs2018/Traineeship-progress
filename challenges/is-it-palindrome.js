/**
 * Write a method that takes a string and returns true if it is a palindrome. A palindrome is a string that is the same whether written backward or forward.
 * NB. strings are case-sensitive.
 * @param {*} word 
 */
function palindrome(word) {
	//to take case-sensitivity into consideration, convert the input to lowercase beforehand
	//const lowerCaseWord = word.toLowerCase();
	// Define an empty string variable to use it collect characters after iteration
	let characterHolder = '';
	for (let i = word.length - 1; i >= 0; i--) {
		// iterate backwards starting from the last index of the input
		characterHolder = characterHolder + word[i];
		//then concatenate each character one by one
	}
	//  now once the iteration is finished, compare the word composed, and if this is identical to the input word
	// if (word === characterHolder) {
	// 	// then return true
	// 	return true;
	// 	// otherwise false
	// } else {
	// 	return false;
	// }
	return word === characterHolder;
}

// console.log(palindrome('adda')); // should return true
// console.log(palindrome('Anna')); // should return false
// console.log(palindrome('abcd')); // should return false
// console.log(palindrome('this one')); // should return false

// TDD - Test Driven Development
console.assert(palindrome('adda') === true, 'Checking for string adda');
console.assert(palindrome('Anna') === false, 'Checking for string Anna');
console.assert(palindrome('abcd') === false, 'Checking for string abcd');
console.assert(palindrome('this one') === false, 'Checking for string this one');
console.assert(palindrome('racecar') === true, 'Checking for string racecar');
