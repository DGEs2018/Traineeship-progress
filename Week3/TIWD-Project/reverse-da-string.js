/* const reverseDaString = function() {
    return 'hi';
};
 */
/* const result = reverseDaString('hello, world!');
console.log(result); */

const reverseDaString = function(myString) {
	console.log(myString);
	let reversed = '';
	for (let i = myString.length - 1; i >= 0; i--) {
		reversed = reversed + myString[i];
	}
	return reversed;
};

console.log(reverseDaString('Dawit'));
