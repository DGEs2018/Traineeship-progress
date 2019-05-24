/* 
Write a function that takes two arguments and returns the smaller.
*/
function smallerFinder(a, b) {
	if (a < b) {
		return a;
	} else if (a > b) {
		return b;
	}
}

console.log(smallerFinder(0, 10)); // should return 0
console.log(smallerFinder(0, -10)); // should return -10
