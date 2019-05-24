/*
Write a program that takes in a string as an argument and returns back the number of uppercase
 Bs in that string.
 */

function countBs(string) {
	let upperCaseBstorer = '';
	for (let i = 0; i < string.length - 1; i++) {
		if (string[i] === 'B') {
			upperCaseBstorer += string[i];
		}
	}
	return upperCaseBstorer.length;
}

console.log(countBs2('BBC')); // should return 2

// Besides the book in response to Sophia's request - with only modification to work for both upper case and lowercase letter b
function countAllBs(string) {
	let upperCaseBstorer = '';
	for (let i = 0; i < string.length - 1; i++) {
		if (string[i] === 'B' || string[i] === 'b') {
			upperCaseBstorer += string[i];
		}
	}
	return upperCaseBstorer.length;
}

console.log(countAllBs('Babyboy')); // should return 3
console.log(countAllBs('Bamboo')); // should return 2

/*
Write a function that takes in two string parameters, with the second one containing one of the
string characters to be counted. 
*/
function countChar(string, character) {
	let charQuantity = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === character) {
			charQuantity += 1; // with return (charQuantity += 1), it counted repeated characters as single
		}
	}
	return charQuantity;
}

function countBs2(string) {
	// the function countBs makes use of countChar to get the count of the character.
	return countChar(string, 'B');
}

console.log(countBs2('BBC')); // should return 2
console.log(countChar('kakkerlak', 'k')); // should return 4
