/*
Writ a recursive function that accepts a single parameter (a positive, whole number)
and returns a Boolean.
*/
/* 
function isEven(num) {
	if (num == 0) {
		return true;
	}
	if (num == 1) {
		return false;
	} else return isEven(num - 2);
}

console.log(isEven(40)); // should return true
console.log(isEven(65)); // should return false
console.log(isEven(-14)); // should throw 'RangeError: Maximum call stack size exceeded' and terminate the excecution after 10 lines
 */
function isEvenModified(num) {
	if (num === 0 && num % 2 === 0) {
		return true;
	}
	if (num === 1) {
		return false;
	}
	if (num < 0) {
		/* if (num == 1) {
		return false;
	} */
		return 'unable to check evenness for negative numbers';
	}
}

console.log(isEvenModified(0)); // should return true
console.log(isEvenModified(1)); // should return false
console.log(isEvenModified(-5)); // should return the message 'Unable to check evenness for negative values'
