// 9. Two Sum
// Write a method that takes an array of numbers. If a pair of numbers in the array sums to zero, return the positions of those two numbers. If no pair of numbers sums to zero, return null.
function two_sum(nums) {}

two_sum([1, 3, -1, 5]); // [[0, 2]]
two_sum([1, 3, -1, 5, -3]); // [[0, 2], [1, 4]]
two_sum([1, 5, 3, -4]); // null

function nullSumNum(nums) {
 // Find out the sum of each of the characters in the array
 for (let i = 0; i < nums.length; i++) {
     // If the sum of any two characters inside returns zero
     let nums = [];
     if (Math.sign(nums[i]) + Math.sign(nums[i]) = )
   // return these in an array of two

 }
 
}

Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

function makeTriangleLoop(num) {
    // get an array of maximum length 8
    for (let i = #; i < 8; i++) {
        let current = num[i];
        current += 1;
    }
    // loop over the each of the elements
    // return the each of them on every line, concatenating each time.
    //
 return current +=;
}

console.log(makeTriangleLoop(8));

function loopTriangleForm() {
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
};


function  isPowerOftwo () {
    // take an input of number type and see if it's a power of two
    let random = number ;
    if ( random % 2 === 0 ){
        return true;
    } else
        // if so then return true
        // otherwise false
}

function squareDigits(num){
  // a place to store the squared numbers
  let squaredNumber = '';
  // iterate over each digit in the number
  while ( i > 0) {
    let digit = num % 10;
  // square the digit
    let digitSquared = Math.pow(digit, 2);

  }
  // prepend to where we are storing the squared numbers
  
  }
  