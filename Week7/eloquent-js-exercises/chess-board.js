/*
 Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 */
// let output = ' ';
function chessBoard(white, dark) {
	let white = ' ';
	let dark = '#';

	for (let i = 0; i < 8; i++) {
		// need to get my head around to have the counters, could that be done without indices
		if (i % 2 === 0) {
			console.log( white);
		} else(i % !== 0) {
			console.log(dark);
		}
		// this will be for the left to right going #s
		// counter+= "####";
		for (let j = 0; j < 8; j++) {
			if (i % 2 === 0) {
				console.log( white);
			} else(i % !== 0) {
				console.log(dark);
			}
			}
		}
	}
	return chessBoard;

console.log(chessBoard(white, dark));

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
