/*
 Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 */
let output = ' ';
function chessBoard(string) {
	let counter = 1;
	for (let counter = 1; counter < 5; counter += '#') {
		// need to get my head around to have the counters, could that be done without indices
		// this will be for the left to right going #s
		// counter+= "####";
		for (let counter = 1; counter < 9; counter += '#') {
			//for the top to bottom going #s
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
