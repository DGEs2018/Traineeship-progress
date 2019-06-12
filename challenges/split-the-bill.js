/**
 * Write a function to balance who has overpaid and should be compensated or who has paid less
 * @param {an object representing members with the paid amount} group 
 */
function splitTheBill(group) {
	// find the total amount paid // variable is converts an object to an array of arrays
	const costInArray = Object.values(group);
	// console.log(costInArray);
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const totalCost = costInArray.reduce(reducer);
	console.log(totalCost);
	// the amount shared per person
	const costPerHead = totalCost / costInArray.length;
	console.log(costPerHead);

	// use the difference to find out who has overpaid or needs to be compensated

	return {
		amy: costPerHead - group.amy,
		max: costPerHead - group.max,
		chris: costPerHead - group.chris
	};
}

const group = { amy: 20, max: 10, chris: 15 };
console.log(splitTheBill(group)); // { amy: -5, max: 5, chris: 0 }
// console.assert(splitTheBill(group), 'incorrect'); // should return nothing if code is right, but should throw an 'assertion failed: incorrect' message if an error is encountered
