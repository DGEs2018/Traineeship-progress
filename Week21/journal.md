# 19.08.2019
## React framework
### Introduction to React
#### Definition
- React a javascript library for building UIs
- Why do we need React ?
 - We need to react in order to be able to
    - introduce components which could then be reused and plugged in any part of 
    - modularity
- `npx create-react-app appname`
- navigating to the `appname` path directory and running `npm start` leads to `local:3000` on the browser

### JSX
#### Definition
- JSX files are JavaScript XML extension syntaxes to JS that is used with React to describe elements in the UI
- JSX files can only be written inside curly braces.

### Components
- Components in React are pieces of codes that could be used independently
- How do we make use of components
    - ```javascript 
        import React from "react"; // imports react class from the react paket
      ```
    - Define component
    - Implement render
    - Export
    - 


# 20.08.2019
### How JSX is compiled to the vanilla JS
- const element = (<h1 className="Howdy">Hiya amigos!</h1>)
- const element = React.createElement('h1, {className:'howdy'}, 'Hiya amigos!');
- const element = {type: 'h1', props:{className:'howdy', children:'Hiya amigos!'}}
## Props 
- Props in React are properties inherited from parent to child items
- Props are just like parameters in functions
- 


###

# 21.08.2019
## Object literals

## Passing Data through Props
- Board to Square component

class Board extends React.Component {
    renderSquare(i) {
        render <Square value={i} />
    }
}

# 22.08.2019
## Function components vs class components in React
- class component is used for the purpose of applying states to UI
- 


## Array destructuring
```javascript
    let myArray=  ["Switzerland", "Berne"];

    // destructuring assignment
    // sets theCountry = myArray[0]
    // sets itsCapital = myArray[1]
    let [theCountry, itsCapital] = myArray;

    alert (theCountry); // Switzerland
    alert (itsCapital); // Berne
```