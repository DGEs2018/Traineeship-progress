#26.08.2019
### Using hooks for functional components

#27.08.2019

### Why do we actually need `import` and `export`

### How do they work ? 

### SPA vs MPA
-  only 1 HTML content re-rendered on client 

### MPA
#28.08.2019
- Head starter for understanding the concept of states in ReactJS

```javascript
const fakeUseState = (initalState) => {
	let state = initalState;
	const updateState = (newState) => (state = newState);
	return [ state, updateState ];
};
```
```javascript
import React, { useState } from "react"; // imports both React, and {useState} as both are components
import ReactDOM from "react-dom"; // imports ReactDOM method from react-dom package/library
import "./styles.css"; // imports this css file from the same directory path

// NB, while importing JS files (which are the components) we don't write extensions



function App() {
  const [textVal, setTextVal] = useState("");
  const [checkBoxVal, setCheckBoxVal] = useState(false);
  const [radioVal, setRadioVal] = useState("");
  const [selectVal, setSelectVal] = useState("");

  const handleClearInputs = () => {
    setTextVal("");
    setCheckBoxVal(false);
    setRadioVal("");
    setSelectVal("");
  };

  const handleTextVal = event => {
    setTextVal(event.target.value);
  };

  const handleCheckBoxVal = () => {
    setCheckBoxVal(!checkBoxVal); // this sets the value of checkBox either to true or false (checked or not)
  };

  const handleRadioVal = event => {
    setRadioVal(event.target.value);
  };
// a function that handles 
  const handleSelectVal = event => {
    setSelectVal(event.target.value);
  };
// Defines a callback function, which is triggered / fired on onClick event on line 118
  const inputConsoleLogger = () => {
    console.log(textVal);
    console.log(checkBoxVal);
    console.log(radioVal);
    console.log(selectVal);

return (
    <div className="App">
      {/* const [state, setState] = useState(''); */}
      <h1>Hello CodeSandbox</h1>
      <h2>Play with functional components in ReactJS!</h2>
      <div>
        <input type="text" value={textVal} onChange={handleTextVal} />
      </div>
      <div>
        <label htmlFor="checkity">are you checked?</label>
        <input
          id="checkity"
          type="checkbox"
          checked={checkBoxVal}
          onChange={handleCheckBoxVal}
        />
      </div>

      <div>
        <input
          type="radio"
          value="Yes"
          name="Pinnochio"
          onChange={handleRadioVal}
          checked={radioVal === "Yes"}
        />
        <input
          type="radio"
          value="Maybe"
          name="Pinnochio"
          onChange={handleRadioVal}
          checked={radioVal === "Maybe"}
        />
        <input
          type="radio"
          value="No"
          name="Pinnochio"
          onChange={handleRadioVal}
          checked={radioVal === "No"}
        />
        <div
          style={{
            display: "inline-block",
            width: "50px",
            height: "50px",
            backgroundColor: "ghostWhite",
            border: "1px solid grey"
          }}
        >
          {radioVal}
        </div>
      </div>

      <div>
        <select type="text" value={selectVal} onChange={handleSelectVal}>
          <option value="firstOption">First</option>
          <option value="secondOption">Second</option>
          <option value="thirdOption">Third</option>
          <option value="fourthOption">Fourth</option>
        </select>
      </div>

      <button onClick={handleClearInputs}>Reset</button>
      <button onClick={inputConsoleLogger}>Show All Vals in console</button>
    </div>
  );
}
```
#29.08.2019

#30.08.2019 - was about breaking down module into separate components and how to have siblings communicate with the container component/ with each other and.


