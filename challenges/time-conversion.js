/**
 * Write a method that takes in a number of minutes, and returns a string that 
 * formats the number into hours:minutes.
 * @param {number} minutes 
 */
/* Steps involved

input: number (in minutes)
output: string (in format hh:mm)

cover edge cases:
negative number --> tell the user to only input positive number if they a negative one
string? --> tell user to only enter a number
 */
function timeConversion(minutes) {
	// find out how many hours are in the minutes
	const hours = Math.floor(minutes / 60);

	// find the remainder minutes
	const onlyMinutes = minutes % 60;

	if (Number.isInteger(minutes) === false) {
		return 'please enter only a number!';
	}
	if (onlyMinutes < 0) {
		// alert the user to 'only positive number is allowed' if they enter negative one
		return 'only positive number is allowed';
	} else if (hours < 10 && onlyMinutes < 10) {
		// remark - if the minutes is smaller than 10 prepend a zero to it
		return `0${hours}:0${onlyMinutes}`;
	} else if (hours < 10) {
		// return hours and minutes concatenated with a : in the middle
		// remark - if the minutes is smaller than 10 prepend a zero to it
		return `0${hours}:${onlyMinutes}`;
	}
	return `${hours}:${onlyMinutes}`;
}

console.log(timeConversion(-10)); // should return: 'only positive number is allowed' - still needs a fix
console.log(timeConversion('ten')); // should return: 'please enter only a number!'
console.log(timeConversion(57)); // should return 01:10
