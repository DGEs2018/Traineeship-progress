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