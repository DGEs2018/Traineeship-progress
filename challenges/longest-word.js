function longestWord(phrase) {
	// split the input sentence into separate words
	const phraseSplitted = phrase.split(' ');
	//  temporarily assign the first of the array of splitted words to be the longest and store it in a variable
	let longestByFar = phraseSplitted[0];
	// loop through each of the list of splitted words starting from the first one (on 0 index)
	for (let i = 0; i < phraseSplitted.length; i++) {
		// if any of the words in the series happens to be longer than the temporarily assigned one
		if (longestByFar.length < phraseSplitted[i].length) {
			// then that one should be the longest
			longestByFar = phraseSplitted[i];
		}
	}
	return longestByFar;
}
longestWord('Irrespective of how hard some programming concepts might be, learning ought to go on!'); // should return "Irrespective"
