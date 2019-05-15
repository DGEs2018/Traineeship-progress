/*
Write a triangle that outputs a right angle triangle, 
starting with 1 # at the left topmost to 7 #s at the right bottom

*/
/* let input = '#';
function trianglePrinter(input) {
	for (let input = '#'; input.length < 8; input += '#') {
		console.log(input);
	}
}

console.log(trianglePrinter(input)); */

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
const height = 4;
const input = '#';
function trianglePrinter() {
	for (let input = '#'; input.length < height + 1; input += '#') {
		console.log(input);
	}
}

console.log(trianglePrinter(height));

/*
Should return this
#
##
###
#### */
