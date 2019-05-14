/*
 Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
 At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 */

let white = ' ';
let dark = '#';

function chessBoard(white, dark) {
	for (let i = 0; i < 8; i++) {
		// horizontals / rows
		if (i % 2 === 0) {
			console.log( white);
		} else (i % 2!== 0) {
			console.log(dark);
		}
		// replicate this for loop for the rest of the rows

		// console.log("\n");

		
		// verticals / columns
		for (let j = 0; j < 8; j++) { 
			if (j % 2 === 0) {
				console.log( white);
			} else (j % 2 !== 0) {
				console.log(dark);
			}
			}
		}
		// replicate this for loop for the rest of the columns
	return chessBoard;
	}
	

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
