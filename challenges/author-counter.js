/* function authorCounter(authors) {
	let authorCount = {};
	for (let i = 0; i < authors.length; i++) { // for i of authors? possible
		if (authoInArray[i] === authoInArray[i + 1]) {
			return authorCounter++;
		}
	}
	return { authors[i]: authorCounter++ };
}
const authors = [ 'k', 'b', 'c', 'd', 'e', 'b', 'c', 'd', 'd' ];
console.log(authorCounter(authors));
 */
/* function authorCounter(authors) {
	let output = [];
	let duplicate = authors.slice();

	for (let i = 0; i < authors.length; i++) {
		let howMany = 0;
		for (let j = 0; i < duplicate.length; j++) {
			if (authors[i] === duplicate[i]) {
				console.log(howMany++);
				delete duplicate[i];
			}
		}
		if (authorCounter > 0) {
			let storedObj = new Object();
			storedObj.value = original[i];
			storedObj.count = howMany;
			output.push(storedObj);
		}
	}
	return output;
}

console.log(authorCounter([ 'abc', 'def', 'abc', 'lmno', 'qrs', 'lmno', 'def' ])); 
*/
/* const authors = [ 'k', 'b', 'c', 'd', 'e', 'b', 'c', 'd', 'd' ];
let emptyHolder = [];
function authorFrequencyObj(authors) {
	for (i of authors) {
		if (authors.indexOf(i) !== -1) {
			emptyHolder.push(i);
		}
	}

	for (x of emptyHolder) {
		let authorAccumulator = 0;
		for (i of authors) {
			if (i === x) {
				authorAccumulator;
			}
		}
		console.log(`${x}: ${authorAccumulator++}`);
	}
}
console.assert(authorFrequencyObj(authors), 'Consider revising');
 */
/* const authors = [ 'k', 'b', 'c', 'd', 'e', 'b', 'c', 'd', 'd' ];
let authorsSorted = [];
let authorsCount = 1;

function authorAccumulator(authors) {
	for (let i = 0; i < authorsSorted.length; i++) {
		// authorsCount = 1;
		for (let j = i + 1; j < authorsSorted.length; j++) {
			if (authorsSorted[i] === authorsSorted[j]) {
				authorsCount++;
			}
		}
		return { authorsSorted: authorsCount++ };
	}
}
console.assert(authorAccumulator(authors), 'Consider revising'); */
function counAuthors(authors) {
	let authorSplitted = authors.join().split(', ');
	let result = {};
	let authorCount = 1;

	for (i of authorSplitted) {
		if (authorSplitted[i] === authorSplitted[i + 1]) {
			return `${authorSplitted[i]}` + authorCount++;
		} else {
			let nextsCount = `${authorCount}${authorSplitted[i]}`;
			result = { ...result, nextsCount };
			authorCount = 1;
		}
	}
	return result;
}
const authors = [ 'k', 'b', 'c', 'd', 'e', 'b', 'c', 'd', 'd' ];
// console.assert(counAuthors(authors), 'review');
console.log(counAuthors(authors));
