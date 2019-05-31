# 27.05.2019
* More array properties & methods
- 
    ```
    let visitCities = [];
    function travelPlan (cities) {
        visitCities.push();
    }
    function travelAdd() {
        return visitCities.shift(Braga);
    }
    function travelCanceled() {
        visitCities.unshift(Madrid);
    }

    ```
- `.trim()` // cuts out white spaces, newlines, tabs etc.
- `.padStart(length`, 'padding character') // 
- `.repeat ()` // const myFav = 'hola!' // 
- `.repeat(myFav, 2)` // hola!hola!
* Rest Parameters
- Functions might take in as indefinite number of arguments as possible, `...` is prepended to before a parameter supplied in a function - such arguments represented as array are referred to as `rest parameter`.
- Math objects / functions
- 
  ```Math.max() - prints out the maximum number out of given values
     Math.min() - prints out the minimum number out of given values
     Math.sqrt() - prints out the square root of a number
     Math.floor() - the largest integer less than or equal to a given number (Math.floor(null) returns 0) (rounds down a fraction to the next biggest integer)
     Math ceil() - the smallest integer less than or equal to a given number (Math.ceil(null) returns 0) (rounds off a fraction to the next biggest integer)
    ```                         
- Destructuring
    - helps unpack an array of objects, into a bunch of variables, which would then be more suitable
    ```let myDestructuredArray = ['item1', 'item2', 'item3'];
       let ['item1', 'item2', 'item3'] = myDestructuredArray
    ```
- JSON 
- JavaScript Object Notation
- Prevents waste of data wheb
```
let objectLiteral = {
    firstname: 'Dawit',
    isAnIntern: true
}
console.log(objectLiteral);
One way to send data as data would be as shown below, but this could actually take long to download, and would be bigger data
<object>
    <firstname>Dawit</firstname>
    <isAnAspiringDev>true</isAnAspiringDev>
</object>
So we use console.log(JSON.stringify(objectLiteral)); // returns a JSON format
```
# 31.05.2019
* List - Data structure
- Javascript data structures
    - array : an ordered collection of items
    - object : collection of key-value pairs
    - map : variation of objects, but with rules for the keys

- Queues and stacks 
    - Concepts more common in other programming languages (no concept of indices involved)
    - Queue - collection of items following the first-in first-out (FIFO) order
        - Ex. Traffic
    - Stack - as opposed to queues follows first-in last-out precedence.
- List
    - Most commonly  data structure type in javascript