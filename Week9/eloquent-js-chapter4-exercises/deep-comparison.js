/**
 * Write a function called deepEqual that takes two equal values and returns true only if they 
 * are the same value or are objects with the same properties, where the values of the properties 
 * are equal when compared to a recursive call with a recursive call to deepEqual
 */

function deepEqual(object1, object2) {
	// object1 === object2;
	if (object1 == null || object2 == null) false;
	if (object1 !== 'object' || object2 !== 'object') return false;
	let keyObj1 = Object.keys(object1);
	let keyObj2 = Object.keys(object2);
	if (keyObj1.length != keyObj2.length) {
		false;
	}
	for (let i = 0; i < sequenceObject2.length; i++) {
		if (!keyObj2.includes(object1[i]) || !deepEqual(object1[i], object2[i])) {
			return false;
		}
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
