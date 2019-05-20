function countBs(string) {
	let upperCaseBstorer = '';
	for (let i = 0; i < string.length - 1; i++) {
		if (string[i] === 'B') {
			upperCaseBstorer += string[i];
		}
	}
	return upperCaseBstorer.length;
}

countBs('BaByBoy'); // should return 3
countBs('Bamboo'); // should return 1
