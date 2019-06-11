/**
 * Write a method that takes in a number of minutes, and returns a string that formats the 
 * number into hours:minutes.
 * @param {*} minutes 
 */
/* Steps involved

input: number (in minutes)
output: string (in format hh:mm)

remark - if the minutes is smaller than 10 prepend a zero to it

cover edge cases:
negative number --> tell the user to only input positive number if they a negative one
string? --> tell user to only enter a number
 */
function timeConversion(minutes) {
	// find out how many hours are in the minutes
	const hours = Math.floor(minutes / 60);

	// find the remainder minutes
	const onlyMinutes = minutes % 60;

	if (typeof minutes != number) {
		return 'please enter only a number!';
	}
	if (onlyMinutes < 0) {
		return 'only positive number is allowed';
	}
	if (onlyMinutes < 10) {
		return `${hours}:0${onlyMinutes}`;
	}
	// return hours and minutes concatenated with a : in the middle
	return hours + ':' + onlyMinutes;

	// remark - if the minutes is smaller than 10 prepend a zero to it

	/* const onlyMinutes = minutes % 60;
	if (onlyMinutes < 10) {
		return hours + ':0' + onlyMinutes;
	} */

	// 5. alert the user to 'only positive number is allowed' if they enter negative one
	if (onlyMinutes < 0) {
		alert('only positive number is allowed');
	}
}

console.log(timeConversion(-10)); // should return: 'only positive number is allowed' - still needs a fix
console.log(timeConversion('ten')); // should return: 'please enter only a number!'
