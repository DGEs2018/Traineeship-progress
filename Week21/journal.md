# 19.08.2019
## React framework
### Introduction to React
#### Definition
- React a javascript library for building UIs
- Why do we need React ?
 - We need to react in order to be able to
    - introduce components which are reusable
    - 
- `npx create-react-app appname`
- navigating to the `appname` path directory and running `npm start` leads to `local:3000` on the browser

### JSX
#### Definition
- JSX files are JavaScript XML extension syntaxes to JS that is used with React to describe elements in the UI
- JSX files can only be written inside curly braces.
- These will then be compiled to vanilla JS using `Babel REPL`

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
  ```jsx
     const element = (<h1 className="Howdy">Hiya amigos!</h1>)
     const element = React.createElement('h1, {className:'howdy'}, 'Hiya amigos!');
     const element = {type: 'h1', props:{className:'howdy', children:'Hiya amigos!'}}
  ```
## Props 
- Props in React are properties inherited from parent to child items
- Props are just like parameters in functions
- 


###

# 21.08.2019

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

## The concept of `state` in ReactJS
[Understanding React's `setState`](https://css-tricks.com/understanding-react-setstate/)

# 23.08.2019
### Declarative vs Imperative programming

#### Imperative DOM Manipulation
- the user is manipulating, hence has control on what to do.

#### Declarative DOM Manipulation
- user declares to React and then React has control and not the user

```javascript
    import React, { useState } from "react";
    import ReactDOM from "react-dom";

    import "./styles.css";

    function myFunc(color) {
        return [color, true];
    }

    const [elephant, cheese] = myFunc("blue");
    // alert(elephant)

    function App() {
    const [backgroundColor, setBackgroundColor] = useState("yellow");
    const [height, setHeight] = useState("100vh");
    const [inputValue, setInputValue] = useState("");

    // alert(background);
    const handleClick = e => {
        console.log("clicking");
        setBackgroundColor("blue");
        setHeight("50vh");
    };

    const handleChange = e => {
        console.log(e.target.value);
        // setValue(" ");
        setInputValue(e.target.value);
        // e.target.value = valu inside the input value;
    };
    console.log("RENDER");

    return (
        <div
        className="App"
        style={{ width: "100vw", height, background: backgroundColor }}
        >
        <input value={inputValue} onChange={handleChange} />

        <button onClick={handleClick}>Click me</button>
        </div>
    );
    }

    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);

    // const app = document.querySelector(".App");
    // const button = document.querySelector("button");

    // button.addEventListener("click", colorChange);

    // const colorChange = () => {
    //   app.style.background = "green";
    // };
```

Reacthook you can manage state with functional component

