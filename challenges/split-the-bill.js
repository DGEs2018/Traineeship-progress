/**
 * Write a function to balance who has overpaid and should be compensated or who has paid less
 * @param {*} group 
 */
function splitTheBill(group) {
	// find the total amount paid // variable is converts an object to an array of arrays
	const costInArray = Object.values(group);
	console.log(costInArray);

	/*  function sumArr(acc, cur) {
        console.log(acc);
        acc + val;
    } */
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const totalCost = costInArray.reduce(reducer);
	console.log(totalCost);
	/* let acc = 0;
    for(let val of vals) {
        acc += val;
    } */

	// the amount is supposed to pay / cost/number people
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
console.log(splitTheBill(group));
