/**
 * Write a JavaScript function to check if a word is an anagram or not.
 * NB - 
 * @param {string} test 
 * @param {string} original 
 */
const isItAnagram = (test, original) => {
	for (let i = 0; i < original.length; i++) {
		if (test.length === original.length && (test.includes(original[i]) && original.includes(test[i]))) {
			return true;
		} else {
			return false;
		}
	}
};

console.log(isItAnagram('foefet', 'toffee')); // true
console.log(isItAnagram('Buckethead', 'DeathCubeK')); // true
console.log(isItAnagram('Twoo', 'WooT')); // true
console.log(isItAnagram('dumble', 'bumble')); // false
console.log(isItAnagram('ound', 'round')); // false
console.log(isItAnagram('apple', 'pale')); // false
