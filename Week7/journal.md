# 13.05.2019
* Eloquent JS Chapter 2 - Program Structure ctd.
- Unexpected syntax error will pop up in case of trying to define a reserved word.
- The environment
    - The collection of the bindings and their values that exist at a given time
    - When a program starts up, the enviroment already contains bindings that are part of the language 
    - Also has bindings to interact with the surrounding system
    - For example, there are functions to interact with the currently loaded website & to read mouse and keyboard input
    - Functions
        - A lot of the values in the default environment have the type function
        - Examples - bindings / pop-ups showing small dialogue boxes asking for user input
        - Invoking, calling or applying - are terms for executing functions
        - Values given functions - arguments
        - The number or type of arguments could vary for different functions
        - The console.log functions
            - Most JS systems provide `console.log` functions, which outputs the result after arguments are plugged in the function
            - Javascript console in the browsers can be accessed via `Command option J`
        - Return Values
            - Function produces a value, it's said to return that value
            - Examples: Math.min, Math.max
        - Control flow
            - When program contains multiple statements, they are executed from top to bottom
        - Conditional execution
            - Where programs take a proper branch, based on the conditions
            - This makes use of the `if` keyword
            - The `if` keyword executes or skips a statement depending on the value of a Boolean expression
            - This deciding expression is written between parentheses after the keyword, then followed by the statement to execute
            - The statement after the if is wrapped in braces, which can also be used to group a number of statements into a single one - which is known as block
            - Braces could also be omitted for a single statement
            - The `else` keyword  comes in to create two separate alternative execution paths
            - For more than two paths to choose from, multiple `if/else` pairs could be chained.
            - Again execution proceeds orderly - it starts with the first condition, if that holds it executes this and stops, if not it carries on to the following `else` and so on
        - While and do loops
            - Loop - is when we run a piece of code multiple times
            - A statement starting with the keyword `while` creates a loop, followed by an expression in parentheses and then a statement, much like `if`. The loops keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean.
            - Example, a program that calculates 2^10 - with two bindings, one to keep track of the result and the other to see how often this result is being multiplied by 2.
            - ``` let cube = 1;
                  let counter = 0;
                  while (counter < 10) {
                      cube = cube * 3;
                      counter = counter + 1;
                  }
                  console.log(cube); // 59049
              ```
        - Do loop
            - ``` let yourName;
                  do {
                      yourName = prompt("Who are you?")
                  } while (!yourName);
                  console.log(yourName);
              ```
            - The program will force you to enter a name: it'll repetitively ask until it gets something of not an empty string
            - Applying the `!` operator convert a value to the a Boolean type before negating it, and all strings except "" convert to true. 
            - Indenting code
                - Its role inside blocks is to make the structure of the code stand out, hence easier to follow the beginning and ending of each block
                - 2, 4 spaces or tabs - important is that each new the same amount of space be added in each block
            - For loops
                - Within the parentheses after the `for` keyword are two semicolons.
                - Preceding the first semicolon, initializer, usually by defining a binding with `let`
                - Following the initializer comes the expression that checks whether the loop must continue
                - Then the last part updates the state of the loop after every iteration
                - In most cases `for`loops are cleaner and shorter than a `while` construct
                - For the 2^10 computing code, below is an alternative solution using for

                ```let result = 1;
                    for (let counter = 0; counter < 10; counter = counter + 1) {
                    result = result * 2;
                    }
                    console.log(result);
                    // → 1024
                ``` 
                - Breaking out of a loop
                    - Not only `false` values to a loop end a loop
                    - `break` also has the effect of jumping out of the enclosing loop
                    ```for (let current = 80; ; current = current + 4) {
                        if (current % 7 == 0) {
                            console.log(current);
                            break;
                        }
                        }
                        // → 84
                    ```
                    - As the for loop doesn't have a checker for the end of the loop unless a `break` statement is plugged in inside
                    - If either `break` is removed or it's accidentally forgotten, the program will keep on producing true thus will be stuck in an infinite loop - bad !!!
                    - The `continue` keyword does the opposite of break
                - Updating bindings succinctly
                    - Especially when looping, programs need to update a binding based on the previous value it contains
                    - `counter = counter + 1`
                    - Shortcuts in JS for the above one and the like 
                    ``` counter += 1 or counter ++;
                        result *= 2; // double result
                        counter -= 1 or counter -- ;// to count down
                     ```
                - Dispatching on a value with switch
                - Capitalization
                    - JS follows the camelCase convention
                - Comments
                    - Are used to describe to other readers the meanings the codes convey
                    - Also for the coders themselves, to stick to related thoughts while coding
                    - Piece of text written along the program, but is completely ignored by the computer when the program is being executed
                    - For single line `//` or for section of more than one line `/* */` irrespective of the line breaks contained inside
# 14.05.2019
* Eloquent Javascript: Chapter 3 - Functions
- Defining a function
    - A regular binding where the value of the binding is a function
    - Start with keyword function, contains a set of parameters (or even no parameter) and a body, i.e. lines of statements that are to be executed when a function is called. Body must always be wrapped inside braces.
    - Example
     ``` 
     // A function containing no parameter at all.
     const greetz = function() {
        console.log ('Shallom!!')
        }

    // A function containing multiple parameters.
    const sqrt = function(base, half){
        let result = 1;
        for (let count = 0; count < half; count++) {
            result *= base;
        }
        return result;
    }
     ```
    - A `return` keyword without an expression following it causes the function to return `undefined`
    - Parameters to a function behave like regular bindings, their initial values are given by the caller of the function and not the code in the function itself

- Bindings and scopes
    - Scope is the part of the program within which the binding is visible
    - The scope for bindings outside any function or block is the program - also known as _global_
    : _meaning if you've one of those inside a loop, these are invisible to the code before and after the loop_**

    - Each scope can 'look out' into the scope around it, so x is visible inside
    - Exception is when multiple bindings have the same name - code can see only the innermost one. 
    : a case in point the example referring to _n_ below - we're referring to the _n/2_ of the function.
        
    - Illustration    
        ``` const quarter = function(n) {
            return n / 4;
            };

            let n = 100;
            console.log(quarter(100));
            // → 25
            console.log(n);
            // → 100
        `````
    - The old keyword `var` is visible throughout the entire scope within the _function level_ 
    - The latest variables introduced `let` and `const` - are however have _scope level_ visibility