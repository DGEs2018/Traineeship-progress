# 29.04.2019
* Learn and undersand NodeJS
    - Under the hood of 'modules, exports and require' in node
    - Module
        - a reusable block of code whose existence does not  accidentally impact other code
        - non-existent before
        - commonjs modules - an agreed upon standard for code module structure
    - first-class functions: 
        - functions can be used as all other data types(strings, number and so on)
        - hence as well possible to pass them around, store them in variables, use them in arrays etc.
    - an expression
        - block of code that results in a value
        - possible due to their 'first-class' nature
        - invoke - run the program ()
    - Attempt to get the file journal.md, out of the directory called 'more-express' failed....
        - Command git mit `journal.md Week5`, while inside more-express, but this ended up naming the file Week5 inside the same directory.
    - Reminders on JS fundamentals
        - Strings should always be under quotation marks or else JS would then assume and search a variable (in vain)
        - Also values inside arrays are separated by a comma
        - Objects- 
            - a collection of name/value pairs
            - Properties inside objects, are separated by a comma
    - npm run start : tells the node package manager run and go to the part of the separate file, under the scripts and looks for the start 'key' in there.
    - Object:
        - a collection of name/value pairs
        - Object 
            - primitive property
            - object property
            - function (called 'method' when attached to an object)
        - Object literal : name:value pairs separated by commas while contained within curly braces
         an example 
         ```{
             firstname: 'Dawit',
             lastname : 'Ghebremedhin',
             address : 
             {
                 street : 'unnecessary',
                 number : 44
             }
            }```
