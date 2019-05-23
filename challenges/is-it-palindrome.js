/*
Write a method that takes a string and returns true if it is a palindrome. A palindrome is a string that is the same whether written backward or forward.

Note: Don't forget that strings are case-sensitive.
*/

function palindrome(word) {
	//to take case-sensitivity into consideration, convert the input to lowercase beforehand
	let lowerCaseWord = word.toLowerCase();
	// Define an empty string variable to use it collect characters after iteration
	let characterHolder = '';
	for (let i = word.length - 1; i >= 0; i--) {
		// iterate backwards starting from the last index of the input
		characterHolder = characterHolder + word[i];
		//then concatenate each character one by one
	}
	//  now once the iteration is finished, compare the word composed, and if this is identical to the input word
	if (lowerCaseWord === characterHolder) {
		// then return true
		return true;
		// otherwise false
	} else {
		return false;
	}
}

console.log(palindrome('anna')); // should return true
console.log(palindrome('Anna')); // should return false
console.log(palindrome('abcd')); // should return false
console.log(palindrome('this one')); // should return false
