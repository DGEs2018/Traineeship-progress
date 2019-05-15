/*
 Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
 At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 */

// let white = ' ';
// let dark = '#';

// function chessBoard(white, dark) {
// 	for (let i = 0; i < 8; i++) {
// 		// horizontals / rows
// 		if (i % 2 === 0) {
// 			console.log(white);
// 		} else if (i % 2 !== 0) {
// 			console.log(dark);
// 		}
// 		// replicate this for loop for the rest of the rows

// 		// console.log("\n");

// 		// verticals / columns
// 		for (let j = 0; j < 8; j++) {
// 			if (j % 2 === 0) {
// 				console.log(white);
// 			} else if (j % 2 !== 0) {
// 				console.log(dark);
// 			}
// 		}
// 	}
// 	// replicate this for loop for the rest of the columns
// 	return chessBoard;
// }

/* let chessBoard = '';
let dark = '#';
let white = ' ';
// iterate over each of the 8 rows, top to bottom
for (let j = 0; j < 8; j++) {
	// once the loop goes all the way through the first row till 8th position it should jump to the next newline
	if (j > 0) chessBoard += '\n';
	// in each row it should populate the inputs vertically
	for (let i = 0; i < 8; i++) {
		// where the sum of the ith and jth position is even populate the checkboard with white
		if ((i + j) % 2 === 0) {
			chessBoard += white;
			// else where the sum of the ith and jth position is odd populate the checkboard with dark
		} else {
			chessBoard += dark;
		}
	}
}

chessBoard; */
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

let chessBoard = '';
for (let j = 0; j < 8; j++) {
	for (let i = 0; i < 8; i++) {
		if ((i + j) % 2 === 0) {
			chessBoard += ' ';
		} else {
			chessBoard += '#';
		}
	}
	chessBoard += '\n';
}
console.log(chessBoard);

/*
expected output

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

 */

/* for checkerboard of all size grids, stored as a variable named size, where instead of changing the grid 
size manually it could be replaced by varying the variable size*/

let size = 14;
let chessBoard = '';
for (let j = 0; j < size; j++) {
	for (let i = 0; i < size; i++) {
		if ((i + j) % 2 === 0) {
			chessBoard += ' ';
		} else {
			chessBoard += '#';
		}
	}
	chessBoard += '\n';
}
console.log(chessBoard);

/*
should return what's shown below

 # # # # # # #
# # # # # # # 
 # # # # # # #
# # # # # # # 
 # # # # # # #
# # # # # # # 
 # # # # # # #
# # # # # # # 
 # # # # # # #
# # # # # # # 
 # # # # # # #
# # # # # # # 
 # # # # # # #
# # # # # # # 
 */
