/*
Write a function that checks if a given value is Boolean or not and returns true or false.
*/
function isItBoolean(value) {
	if (value === true || value === false) {
		return true;
	} else {
		return false;
	}
}

isItBoolean(true); // should return true
isItBoolean(false); // should return true
isItBoolean(10); // should return false
