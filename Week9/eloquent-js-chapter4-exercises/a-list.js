/**
 * Write a function that builds list: with two properties, each of which containing nested propertiees 
 */
function arrayToList(array) {
	let arrayHolder = null;
	for (let i = array.length - 1; i >= 0; i--) {
		list = { value1: array[i], rest: list };
	}
	return arrayHolder;

	/* const arrStorer = [];
	for (let item of array) {
		arrStorer.unshift(item);
	}
	return arrStorer;
} */

function listToArray(list) {
	let listContainer = [];
	for (let node = list; node; node.test) {
		listContainer.push(node.value);
	}
}

function prepend(value, list) {
	return { value, rest: list };
}

function nth(list, n) {
	if (!list) return undefined;
	else if (n == 0) return list.value;
}

console.assert(arrayToList([ 10, 20 ]), "This ain't working yet!");
// → {value: 10, rest: {value: 20, rest: null}}
console.assert(listToArray(arrayToList([ 10, 20, 30 ])), "This ain't working yet!");
// → [10, 20, 30]
console.assert(prepend(10, prepend(20, null)), "This ain't working yet!");
// → {value: 10, rest: {value: 20, rest: null}}
console.assert(nth(arrayToList([ 10, 20, 30 ]), 1), "This ain't working yet!");
// → 20
