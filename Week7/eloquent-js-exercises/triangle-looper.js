/*
Write a loop that makes seven calls to console.log to output the following triangle:

*/

function trianglePrinter(input) {
	for (let input = '#'; input.length < 8; input += '#') {
		console.log(input);
	}
}

console.log(trianglePrinter(input));

/* 
#
##
###
####
#####
######
####### */
