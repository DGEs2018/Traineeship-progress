/*
Writ a recursive function that accepts a single parameter (a positive, whole number)
and returns a Boolean.
*/

function isEvenModified(num) {
	if (num === 0) {
		return true;
	}
	if (num === 1) {
		return false;
	}
	if (num < 0) {
		return isEvenModified(-num);
	} else return isEvenModified(num - 2);
}

console.log(isEvenModified(50)); // should return true
console.log(isEvenModified(75)); // should return false
console.log(isEvenModified(-1)); // should return the message 'Unable to check evenness for negative numbers'
