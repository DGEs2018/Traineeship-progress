# 22.05.2019
* Eloquent JavaScript Chapter - 4 Data structures: objects and arrays

```After git branch - d is-even.....should this have consequences ? 
git branch -d is-even
warning: deleting branch 'is-even' that has been merged to
         'refs/remotes/origin/is-even', but not yet merged to HEAD.
Deleted branch is-even (was 9391bb51).
```

- Objects allow building more complex structures
- Data sets
    - A collection of things could be represented using data sets
    - Arrays
    - Arrays are JS datatypes for storing sequences of values
    - Arrays are written as a list of values inside square brackets separated by commas 
    ```
    Examples: myTodoArray = ['wake up', 'drink a coffee', 'get the train', 'do the commute', 'be at work'];
    function callMyTodos () {
	    return myTodoArray;
    }
    callMyTodos() // should return (5) ["wake up", "drink a coffee", "get the train", "do the commute", "be at work"]
    ```
    - Dots are used for accessing properties, whereas only square brackets can be used in arrays to refer to the position of the ith element in the array
    `myTodoArray[0] // should return 'drink a coffee', the element listed second from the start`
    -  value.x - fetching the property of value named 'x'and value[x] evaluate the expression, result converted to string as property name
    - `null` and `undefined` are the only two values that don't have properties. Running `undefined.length;` throws `TypeError: undefined has no properties` error
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
        - A number of methods could be used to manipulate arrays.
            ```
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
        - list of key-value pairs separated by commas
        - characterstics name followed by colon and a value
        
        ```let myPersonalDetails = {
            firstname: "Dawit",
            lastname: "Ghebremedhin"
            address : "Wagnerstrasse 21"  
        }
        Object.assign() - method / function that copies all properties from one to another object

        let objectExample = {x:1, y:2, z:3}
        Object.assign(objectExample, {a: 4, b:5, c:6}) // returns {x: 1, y: 2, z: 3, a: 4, b: 5, c: 6}
        Equivalently, both `.slice()` & `.slice(0)` function likewise for both arrays and strings.
        let exArray = ['Just', 'a', 'demo', 'to', 'show', 'how', 'slice', 'works'];
        console.log(exArray.slice()); // ['Just', 'a', 'demo', 'to', 'show', 'how', 'slice', 'works']
        console.log(exArray.slice(0)); ['Just', 'a', 'demo', 'to', 'show', 'how', 'slice', 'works']


        ```
    - Mutability
        - The value of numbers, strings and Boolean datatypes can not be changed (immutable)
        - On the contrary objects allow change
       ``` let myObject = {value: 'don\'t know what to give it'} or 
           let myObject = {value: "don't know what to give it"} ( use the escape character(\) or wrap the entire phrase around double quotes so as to ignore the single quote, apostrophe)

        let theirObject = myObject; // Objects are said to have the same identity
        ```
# Notes on Git workflows
* Git Terminologies
    - Git is one of the versioned control systems. GitHub is a platfrom where several devs have an access to & collaborate on.
    - 
    - A master in GitHub is analogous term main trunk of a tree.
        - All the changes we do should be archived separately on a separate version
        - That's what we need a branch for : to create branches `git checkout -b desired-new-branch-name` or `gco -b desired-new-branch-name`
        - When creating a branch, all the content on the master is copied. A branch could be thought of as an intermediary rough draft copy where all the rough stuff is being saved. 
        - Using a tree analogy to master and branch on GitHub
        - When switching between branches it's always the best 
        ```
        `git stash` //for files that's not even been committed yet. To mean save my changes for later, either on the same branch or when switching to a new branch on GitHub
        `git status` or `gst`(in between to find out the difference)
        `git stash apply`(once)
        reminders - for the each new chapter create a new branch
        `git stash save "name"`
        `git stash list` (to see all the stashes, starting with name of the stash:)
        `git stash apply gitstash name`
        `git stash --include-untracked` // includes untracked files to the stash)
        `git stash list, the least number is that of the one that's saved the latest`
        ```
        - Before creating branches - best practice is to always switch back to the master and then run `git pull` - to update any approved changes to the master.
        - To resolve **this branch has conflicts that must be resolved** warning on the GitHub interface use `git pull --rebase origin master`
        ```
        git branch -m new-branch-name
        git push origin :old-branch-name new-branch-name
        git push origin -u new-branch-name
        ```


        - Deleting a branch locally as well as remotely. Below is one of the links used to refer to that
         <https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely>


    - Destructuring 
