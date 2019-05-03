const number = 10;

function createCalculator(a) {
	return function add(b) {
		console.log(a, b);
	};
}

const calculatorOf10 = createCalculator(number);
console.log('====================================');
console.log(calculatorOf10);
console.log('====================================');

const a = 20;

console.log(calculatorOf10(a));
