// Short circuiting
// TRUE & FALSE => 2 boolean values
// truthy && falsy values
// falsy: 0, '', null, undefined, NaN

console.log(false == 0); // TRUE
console.log(false === 0); // FALSE
console.log(false == 'false'); // FALSE
console.log(false == ''); // TRUE

// OR - ||
// If first is truthy then take first one, otherwise second one.
const a = '';
const b = '20';
const value = a || b;
console.log(value);
console.log('' || false || 0);
console.log('' || false || 0 || 100 || 10000);

// AND - &&
console.log('----------AND-------------');
console.log('' && 100); // ''
console.log(20 && 100 && 0); // 0
console.log(20 && 100 && 0 && false); // 0
console.log('--------------------------');

// ES6 default arguments
function withArgs(a, b = 100) {
	// var b = b || 100;  Version before ES6, with the OR shortcircuit
	return a + b;
}

console.log(withArgs(20));
console.log(withArgs(20, 1));
