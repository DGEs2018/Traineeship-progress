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


# 30.04.2019
* Databases
- There are many types
    - DB - is where the data is stored in the server
    - Relational
        - key to understanding of the non-relational ones
    - Non-relational

* Relational Databases
- Let's construct cookbook application, which would contain
    - Users
    - Recipes
- Table for users, could be
    - column: with an attribute in each one
        - contain Id, name, email, address
    - help uniquely identified a specific resource
    - row
- Table for recipes
    - column : with an attribute in each one
        - Id, category, title, ingredients, UserId

- SQL (Structured Query Language)
    - SQL
    - Select * FROM Users
    - Schema (the Skeleton of the table)
- Category created by the user
- Primary key - the column that uniquely identified
- Foreign keys - 
- The danger of migrating tables could be avoided by constructing a better initial model
- What happens when the same table becomes shared by many users: 1-n relational becomes n-n (while primary keys are still preserved foreign keys disappear) 

- CMS
    - content management system enables access for non-developers
- Headless CMS
    -
- API Server
    - endpoint ('/')
    - authentication
    - structure JSON response

- Data Model
- Good example to look at would be 'ginetta.net' page
- Table --> Model (collection / singleton - table with a singleton)
- Row   --> Entry
- Column--> Field


- To model the sectionbanner `We create websites and apps that click with users.`
- Inputs needed with their datatypes
- header - text
- content - text
- link - collectionlink / ? link
- link 
- title - text
- href - text

* 02.05.2019
- Presentation on servers and clients <https://docs.google.com/presentation/d/1laPd-ru4ffcWh_bW6oxjWq9ZmI8sk5UM6Sqm6PsF0ZE/edit#slide=id.g5901879338_0_22>

- Routing - mapping HTTP requests to content
    -

* 03.05.2019
- Shortcut Shift + Cmd + P to access the shell command on the VS interface.

- Discussion about scopes and closures with Yusef (`closure.js`)
