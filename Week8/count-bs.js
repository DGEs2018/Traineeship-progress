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

console.log(countBs('BaByBoy')); // should return 3
console.log(countBs('Bamboo')); // should return 1

// The same problem, but modified to work for both upper case and lowercase letter b
function countBs(string) {
	let upperCaseBstorer = '';
	for (let i = 0; i < string.length - 1; i++) {
		if (string[i] === 'B' || string[i] === 'b') {
			upperCaseBstorer += string[i];
		}
	}
	return upperCaseBstorer.length;
}

console.log(countBs('Babyboy')); // should return 3
console.log(countBs('Bamboo')); // should return 2
