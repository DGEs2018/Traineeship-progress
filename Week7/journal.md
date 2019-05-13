# 12.05.2019
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
            - ``` let result = 1;
                  let counter = 0;
                  while (counter < 10) {
                      result = result * 2;
                      counter = counter + 1;
                  }
                  console.log(result); // 1024
              ```
        - Do loop
            - ``` let yourName;
                  do {
                      yourName = prompt("Who are you?")
                  } while (!yourName);
                  console.log(yourName);
              ```