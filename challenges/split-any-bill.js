/**
 * Write a function to balance who had overpaid and should be compensated or who has paid less. 
 * @param {*} group 
 */
function splitAnyBill(group) {
	// find the total amount paid // variable is converts an object to an array of arrays
	const costInArray = Object.values(group);
	console.log(costInArray);
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const totalCost = costInArray.reduce(reducer);
	console.log(totalCost);
	// the amount is supposed to pay / cost/number people
	const costPerHead = totalCost / costInArray.length;
	console.log(costPerHead);
	// use the difference to find out who has overpaid or needs to be compensated
	for (const [ key, value ] of Object.entries(group)) {
		return {
			key: costPerHead - value
		};
	}
}

const group = { pers1: 400, pers2: 100, pers3: 150, pers4: 360 };
console.assert(splitAnyBill(group), 'revise again'); //
