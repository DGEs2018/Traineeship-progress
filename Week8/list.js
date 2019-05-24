function arrayToList() {
	return null;
}

console.assert(arrayToList([ 10, 20 ]) === { value: 10, rest: { value: 20, rest: null } }, 'Input is [10, 20]');
console.assert(
	arrayToList([ 10, 20, 30 ]) === { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } },
	'Input is [10, 20, 30]'
);

// console.log(arrayToList([ 10, 20 ]));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([ 10, 20, 30 ])));
// → [10, 20, 30]

// ADVANCE
// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([ 10, 20, 30 ]), 1));
// → 20
