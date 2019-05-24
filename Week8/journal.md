# 22.05.2019
* Eloquent JavaScript Chapter - 4 Data structiures: objects and arrays

```After git branch - d is-even.....should this have consequeces ? 
git branch -d is-even
warning: deleting branch 'is-even' that has been merged to
         'refs/remotes/origin/is-even', but not yet merged to HEAD.
Deleted branch is-even (was 9391bb51).
```

- Objects allow building more complex structures
- Data sets
    - A collection of things could be represented using data sets
    - Arrays are JS datatypes for storing such things 
    - Dot and square brackets help access properties
    -  value.x - fetching the property of value named 'x'and value[x] evaluate the expression, result converted to string as property name
    - `null` and `undefined` are the only two values that don't have properties : `undefined.length;`
      would throw `TypeError: undefined has no properties` error
    ```
    let myListOfRandomNumbers = [1, 9, 5, 17, 40];
    console.log(myListOfRandomNumbers[1]);
    console.log(myListOfRandomNumbers[4]); // returns 40
    console.log(myListOfRandomNumbers[8-6]); // returns 5
    console.log(myListOfRandomNumbers[2-(-1)]); // returns 17 
    ```
    - Positioning in arrays is zero based, meaning counting starts at 0 for the first item from the left-hand-side and goes on
    - Also arithmetic operations work fine for indicating position in arrays
    ```console.log(myListOfRandomNumbers[6/2]) // also returns 17
       console.log(myListOfRandomNumbers[3*1]) // also returns 17
       console.log(myListOfRandomNumbers[6%2]) // also returns 1
    ```
    - Methods
        - properties that hold function values
        
            ```
            .toUpperCase()
            .toLowerCase()
            .push('input') // adds an element at the end of an array
            let tenToFifteen = [10, 11, 13, 14 ,15]
            tenToFifteen.push(12)
            .pop('input') // removes an element at the end of an array
            tenToFifteen.pop(15) // should return[10, 11, 13, 14]
            .unshift('input') // add an element at the start of an array
            .shift('input') // removes an element at the start of an array
            .indexOf // searchs through the array from start to end
            .lastIndexOf // searchs through the array from the end to start
            .slice (startindex, end index) // start index is included, while the end index is exclusive, if end-index omitted, all the elements including the start will be extracted. 
            .slice() // if the start-index is omitted the entire array will be copied
            ```
    - Objects
        - list of properties separated by commas
        - characterstics name followed by colon and a value
        
        ```let myPersonalDetails = {
            firstname: "Dawit",
            lastname: "Ghebremedhin"
            Addresse : "Wagnerstrasse 21"  
        }
        Object.assign - function that copies all properties from one to another object

        let objectExample = {x:1, y:2, z:3}
        Object.assign(objectExample, {a: 4, b:5, c:6}) // returns {x: 1, y: 2, z: 3, a: 4, b: 5, c: 6}
        ```
    - Mutability
        - The value of numbers, strings and Boolean datatypes can not be changed (immutable)
        - On the contrary objects allow change
       ``` let myObject = {value: 'don't know what to give it'}
        let theirObject = myObject; // Objects are said to have the same identity
        ```
        - myTodos(['wake up', 'drink a coffee', 'get the train', 'do the commute', 'be at work']);
        - Delete branch - read-up resources
https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely

let myStringArray = [ 'Hello', 'World' ];
let arrayLength = myStringArray.length;
for (let i = 0; i < arrayLength; i++) {
	console.log(myStringArray[i]);
	//Do something
}

let colors = [ 'red', 'green', 'blue' ];
for (const color of colors) {
	console.log(color);
}
