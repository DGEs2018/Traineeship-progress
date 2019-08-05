/**
 * Write a function that builds list: with two properties, each of which containing nested propertiees 
 */
function arrayToList(array) {
	let list = null;
	for (let i = array.length - 1; i >= 0; i--) {
		list = { value: array[i], rest: list };
	}
	return list;
}
const list = arrayToList([ 5, 7 ]);
console.log(list); // { value: 5, rest: { value: 7, rest: null } }

console.log(list); // { value: 1, rest: { value: 2, rest: null } }
function listToArray(list) {
	let listContainer = [];
	for (let node = list; node; node.rest) {
		listContainer.push(node.value);
	}
	return listContainer;
}

function prepend(value, list) {
	return { value, rest: list };
}

function nth(list, n) {
	if (!list) return undefined;
	else if (n == 0) return list.value;
	else return nth(list.rest, n - 1);
}

console.assert(arrayToList([ 10, 20 ]), "This ain't working yet!");
// → {value: 10, rest: {value: 20, rest: null}}
console.assert(listToArray(arrayToList([ 10, 20, 30 ])), "This ain't working yet!");
// → [10, 20, 30]
console.assert(prepend(10, prepend(20, null)), "This ain't working yet!");
// → {value: 10, rest: {value: 20, rest: null}}
console.assert(nth(arrayToList([ 10, 20, 30 ]), 1), "This ain't working yet!");
// → 20
