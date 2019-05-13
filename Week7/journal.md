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
        - Most JS systems provide `console.log` functions, which outputs the result after arguments are plugged in the function
         - Javascript console in the browsers can be accessed via `Command option J`
         - 