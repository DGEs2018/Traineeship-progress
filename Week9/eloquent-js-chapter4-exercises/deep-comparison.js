/**
 * Write a function called deepEqual that takes two equal values and returns true only if they 
 * are the same value or are objects with the same properties, where the values of the properties 
 * are equal when compared to a recursive call with a recursive call to deepEqual
 */

function deepEqual(one, two) {
	// first assumption, if two objects are strictly equal, no need to compare they are already equal.
	if (one === two) return true;
	// if either of them is null they are not 'deeply equal'
	if (one == null || two == null) false;
	//if either of them isn't an object, they are not 'deeply' equal
	if (one !== 'object' || two !== 'object') return false;
	/* et keyObj1 = Object.keys(one);
	let keyObj2 = Object.keys(two);
	if (keyObj1.length != keyObj2.length) {
		false;
    } */
	if (Object.keys(one).length !== Object.keys(two).length) return false;
	for (let key in one) {
		// if one of the properties in object one isn't found inside that of object two, then still they are not equal
		if (!(key in two)) return false;

		// if (!deepEqual(one[key], two[key])) return false;
		/* if (!keyObj2.includes(one[i]) || !deepEqual(one[i], two[i])) {
			return false;
		} */
	}

	return true;
}

let obj = { here: { is: 'an' }, object: 2 };
console.assert(deepEqual(obj, obj), 'Review please!');
// → true
console.assert(deepEqual(obj, { here: 1, object: 2 }), 'Review please!');
// → false
console.assert(deepEqual(obj, { here: { is: 'an' }, object: 2 }), 'Review please!');
// → true
