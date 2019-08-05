# 03.06.2019
* Eloquent JS Chapter 5
- Higher-Order Functions
    - Functions that operate on other functions either by taking them as arguments or by returning them
    - Can create new functions 
    ```
    function numCubed(num) {
        return m
    }
    ```
# 07.06.2019
* Closing down chapter 4 of Eloquent JavaScript
- Destructuring 
    - Destructuring assignment is a special syntax that enables 'unpacking' arrays or objects into a bunch of variables, to make them more convenient.
    - Also works great for complex functions with many of parameters, default values
    <https://javascript.info/destructuring-assignment>
    - Example of array destructuring
        ```
        // array containing my name and last name
        let myNames = ['ramblerboy', 'intown']

        // applying the destructuring assignment
        let [name, lastname] = myNames;

        console.log(name);// ramblerboy
        console.log(lastname); // intown
        ```
    - Destructuring `null` and `undefined`

```
const person = {
	first: 'Dawit',
	last: 'Ghebremedhin',
	country: 'Switzerland',
	city: 'Berne',
	email: 'dawit@example.com'
};

const first = person.first;
const last = person.last;

// repetitive code could have been typed in over and over

// What could be done instead is - destructure them in a single line

const { first, last } = person; // the new destructuring syntax

//give me a variable called first, a variable called last, and
//take it from the person object - first and last properties are going to be scoped to
//the parent block.
```




## Scans
- Link on how to hang .pdf images inside a markdown <http://manual.softcover.io/book/customization>

- [Data Structure Sketch Notes 1](./Scans/Data-structures-scan1.pdf)

- [Data Structure Sketch Notes 2](./Scans/Data-structures-scan2.pdf)

- [Data Structure Sketch Notes 3](./Scans/Data-structures-scan3.pdf)

- [Data Structure Sketch Notes 4](./Scans/Data-structures-scan4.pdf)

- More notes on Git
    - the content of whatsoever is written inside readme.md is automatically displayed on Github (unlike other .md files that show their content when clicked)
    - the  problem of using `git revert <last commit>` especially when working in a team
        - as git is technically replacing the older commit with a new one
        - and while doing so it gives a unique identifier id for every new commit, the newly assigned (id) 
        could confuse other collaborators on the project
        <https://dev.to/isabelcmdcosta/how-to-undo-the-last-commit--31mg>
        - How to stash untracked files
        <https://stackoverflow.com/questions/835501/how-do-you-stash-an-untracked-file>
        - >New versions of git now have `git stash --all` which stashes all files, including untracked and ignored files.
          `git stash --include-untracked` no longer touches ignored files (tested on git 2.16.2). As of version 1.7.7 you 
           can use git stash --include-untracked or git stash save -u to stash untracked files without staging them.

        - Add (git add) the file and start tracking it. Then stash. Since the entire contents of the file are new, they will be 
          stashed, and you can manipulate it as necessary.
