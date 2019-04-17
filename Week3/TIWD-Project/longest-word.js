//Write a function that takes an array of words and returns the length of the longest one.

// function longestWord (words){
//    let wordsSplitted = words.split(' ');
   
//    let wordLength = wordsSplitted.length;

//    let longestYet = wordsSplitted[0];
 
//     for (let i=0; i < wordLength; i++) {
//        if (longestYet <= wordsSplitted[i]){
//            return longestYet = wordsSplitted[i];
//        }
//     }
//     return longestWord();
// }

let words = ['Richie', 'Joanie', 'Greg', 'Marcia', 'Bobby'];

function longestWord(words) {
    console.log(words);

    const longestWordYet = words ;

    for(let i=0; i < longestWordYet.length; i++){
        return longestWordYet =+i;
    }
    
    console.log(longestWordYet === 6);
    
}

// console.log(maxLength === 6);

console.log(longestWord(words));

/*


var words = ['Richie', 'Joanie', 'Greg', 'Marcia', 'Bobby'];


const checkLength = function() {}


const maxLength = checkLength(words);
console.log(maxLength === 6);


*/
