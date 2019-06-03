/**
 * Write a function that builds list: with two properties, each of which 
 * containing nested properties 
 * 
 * @param {*} arr
 */
function arrayToList(arr) {
	let list = null;
	let array = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		if ((i = arr.length - 1)) {
			list = {
				value: arr[i],
				rest: null
			};
		} else {
			list = {
				value: arr[i],
				rest: list
			};
		}
	}
}

console.log(arrayToList([ 1, 2, 3 ]));
