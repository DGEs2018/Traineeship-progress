/*
Write a triangle that outputs a right angle triangle, 
starting with 1 # at the left topmost to 7 #s at the right bottom

*/

function trianglePrinter(input) {
	for (let input = '#'; input.length < 8; input += '#') {
		console.log(input);
	}
}

console.log(trianglePrinter(input));

/* 
Expected output should be similar to the display below.
#
##
###
####
#####
######
####### */
