/* 
Write a function that takes two arguments and returns the smaller.
*/
function smallerFinder(a, b) {
	if (a < b) {
		return a;
	} else if (a > b) {
		return b;
	} else {
		console.log('They are equal');
	}
}

smallerFinder(5, 10); // should return 5
smallerFinder(16, 9); // should return 9
smallerFinder(5, 5); // should return 'They are equal'
