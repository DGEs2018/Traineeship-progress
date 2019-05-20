function countChar(string, character) {
	let charQuantity = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] == character) {
			charQuantity += 1; // with return (charQuantity += 1), it counted repeated characters as single
		}
	}
	return charQuantity;
}
function countBs(string) {
	return countChar(string, 'B');
}

countChar('trying', 'g'); // should return 1
countChar('Bamboo', 'o'); // should return 2
