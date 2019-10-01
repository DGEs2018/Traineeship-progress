# 01.10.2019
- `JSON.stringify()` changes an object into strings
     > The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

- the method find()
    ```javascript
        const array = [20, 50, 60, 90];

        const pickedByFind = array.find (function(el) {
            return el > 20;
        })
        console.log(pickedByFind); // expected output 50, 60, 90
    ```
# 02.10.2019