// EXERCISE 2

// Write a function that prints today's date in the following format
// 'Wednesday, April 24, 2019'
// Use the Luxon library: https://moment.github.io/luxon/
// Check out the formatting features: https://moment.github.io/luxon/docs/manual/formatting.html

/*
const today = function() {}
today(); //'Wednesday, April 24, 2019'
*/
/* let { DateTime } = require('luxon');
const datumFunction = function() {};

function datumFunction() {
	console.log(dateFunction);
}

DateTime.local();

const dateFormat = DateTime_HUGE;
const area = 
DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });
 */
const dateTimeTeller = function() {
	const needed = DateTime.local();
	// const DateTime = today;
	const method = toLocaleString(needed.DATE_HUGE);
	/* const weekday = 'Wednesday';
	const month = 'April';
	const day = 24; */
	console.log(dateTimeTeller);
};
console.log(dateTimeTeller());

/* console.log(dateRequired);

const dateToday = DateTime.local().toLocaleString({ Wednesday: 'long', April: 'long', 24: '2-digit' });
 */
