/*
 Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 */
let output = ' ';
function chessBoard(string) {
	let counter = 1;
	for (let counter = 1; counter < 5; counter += '#') {
		// need to work my head around to have the counters, might be too early for i
		// counter+= "####";
		for (let counter = 1; counter < 9; counter += '#') {
			if (counter % 2 !== 0) {
				console.log(' ####');
			} else if (counter % 2 === 0) {
				console.log('#### ');
			}
		}
	}
	return counter;
}
console.log(output);

/*
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
 */
