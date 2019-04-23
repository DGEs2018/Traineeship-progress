// EXERCISE 3
// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars
// Create a function that takes an array of string and returns the unique values


/* const elements = ['hi', 'hello', 'hi', 'hello world!', 'hola', 'hallo', 'hola'];
const unique = function() {}
const uniqueElements = unique(elements);
console.log(uniqueElements) // ['hi', 'hello', 'hello world!', 'hola', 'hallo']
 */
const words = ['hi', 'hello', 'hi', 'hello world!', 'hola', 'hallo', 'hola'];
// const unique = function(elements) {
//     const uniqueElements = [];
//     for (let i = 0; i < elements.length; i++) {
//         if (elements[i] = 1){
//             elements[i] = uniqueElements;
//         } 
//         return uniqueElements
//     }
// }

function uniqueElements(elements) {
    const uniqueEl = [];
    console.log(uniqueEl);
    for(let i = 0; i < elements.length; i++) {
        console.log(elements);

        const elGathered = uniqueEl.concat(elements);
        console.log(elGathered);
 
    }
    return uniqueEl;
    
}

console.log(uniqueElements(words));


