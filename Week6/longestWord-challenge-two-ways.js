function longestWord(str) {
	let words = str.split(' ');
	let longestWord = '';

	for (let word of words) {
		if (word.length > longestWord.length) {
			longestWord = word;
		}
	}
	return longestWord;
}

console.log(longestWord('Solving programming problems improve your algorithmic way of thinking.'));

function longestWords(str) {
	let words = str.split(' ');
	let size = 0;
	let max = [ '' ];

	for (let i = 0; i < words.length; i++) {
		if (words[i].length >= size) {
			size = words[i].length;
			if (max[max.length - 1].length < words[i].length) {
				max = [];
				max.push(words[i]);
			} else {
				max = [ ...max, words[i] ];
			}
		}
	}

	return [ ...max ];
}
