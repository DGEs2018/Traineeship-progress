/*
Write a triangle that outputs a right angle triangle, 
starting with 1 # at the left topmost to 7 #s at the right bottom

*/

function trianglePrinter(input) {
	let input = '#';
	for (let input = '#'; input.length < 8; input += '#') {
		console.log(input);
	}
}

trianglePrinter(input);

/* 
Expected output should be similar to the display below.
#
##
###
####
#####
######
####### */
// the variety with automatic size triangle generator

function trianglePrinter(height) {
	const input = '#';
	for (let input = '#'; input.length < height + 1; input += '#') {
		console.log(input);
	}
}

console.log(trianglePrinter(4));

/*
Should return this
#
##
###
#### */
