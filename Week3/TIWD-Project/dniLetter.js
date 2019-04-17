// EXERCISE 2
//
// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars
// Complete the following function to get the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//	 _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//	| T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//	|____________________________________________________________|
// 
// You can use 'result' variable to store the resulting letter.
// If your code works, the last three equalities will be 'true'
// Remember and check what the operator % does!!
// (10 % 3) => 1



const dniLetter = function (dni) {
	const lookup = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
				  'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  let result = '';
  
  const dniNumber = dni % 23;
  console.log(dniNumber);
  result = dniNumber;
  
  const solution = lookup[dniNumber]
  result = solution;
  console.log(solution);

  // Do something...
  return result;
}
console.log(dniLetter(12345678) === 'Z');
console.log(dniLetter(34667892) === 'S');
console.log(dniLetter(92234488) === 'A');
