/*
 Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
 At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 */
function chessBoardMaker() {
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
	return chessBoard;
}
console.log(chessBoardMaker());

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

function chessBoardMaker() {
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
	return chessBoard;
}
console.log(chessBoardMaker);
 */
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
