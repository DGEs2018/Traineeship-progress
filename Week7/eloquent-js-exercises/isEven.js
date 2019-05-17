/*
Writ a recursive function that accepts a single parameter (a positive, whole number)
and returns a Boolean.
*/

function isEven(num) {
	if (num >= 0 && num % 2 === 0 && isEven(num - 2) === true) {
		console.log(true);
	} else if (num < 0) {
		console.log('Negative inputs are invalid');
	}
}

isEven(-8); // should return 'Negative inputs are not considered'
