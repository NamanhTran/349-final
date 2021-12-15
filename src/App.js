import React, {useState} from 'react';
import './App.css';

function App() {
  const [curInput, setCurInput] = useState("");
  const [prevOperator, setPrevOperator] = useState(null);
  const [prevInput, setPrevInput] = useState(null);

  const onPress = (e) => {
    const key = e.target.innerHTML;
    console.log(key);
    const numSet = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);

    if (numSet.has(key)) {
      setCurInput(curInput + key);
    }

    else if (key === "AC") {
      setCurInput("");
      setPrevOperator(null);
      setPrevInput(null);
    }

    else if (key === "+/-") {
      if (curInput === "") {
        setCurInput("-");
      }

      else if (curInput[0] === '-') {
        setCurInput(curInput.slice(1));
      }

      else {
        setCurInput('-' + curInput);
      }
    }

    else if (key === "/") {
      if (prevInput !== null) {
        setCurInput(parseFloat(prevInput) / parseFloat(curInput));
      }

      else {
        setPrevInput(curInput);
        setPrevOperator('/');
        setCurInput("");
      }
    }

    else if (key === "*") {
      if (prevInput !== null) {
        setCurInput(parseFloat(prevInput) * parseFloat(curInput));
      }

      else {
        setPrevInput(curInput);
        setPrevOperator('*');
        setCurInput("");
      }
    }

    else if (key === "-") {
      if (prevInput !== null) {
        setCurInput(parseFloat(prevInput) - parseFloat(curInput));
      }

      else {
        setPrevInput(curInput);
        setPrevOperator('-');
        setCurInput("");
      }
    }

    else if (key === '+') {
      if (prevInput !== null) {
        setCurInput(parseFloat(prevInput) + parseFloat(curInput));
      }

      else {
        setPrevInput(curInput);
        setPrevOperator('+');
        setCurInput("");
      }
    }

    else if (key === '.') {
      if (curInput.length === 0) {
        setCurInput('.');
      }

      else if (!curInput.includes('.')) {
        setCurInput(curInput + '.');
      }
    }

    else if (key === '=') {
      if (prevInput !== null && curInput !== "") {
        setCurInput((parseFloat(prevInput) * parseFloat(curInput)).toString());
        switch (prevOperator) {
          case '*': 
          setCurInput((parseFloat(prevInput) * parseFloat(curInput)).toString());
            break;
          
          case '-': 
            setCurInput((parseFloat(prevInput) - parseFloat(curInput)).toString());
            break;

          case '+': 
            setCurInput((parseFloat(prevInput) + parseFloat(curInput)).toString());
            break;

          case '/': 
            setCurInput((parseFloat(prevInput) / parseFloat(curInput)).toString());
            break;
        }

        setPrevInput(null);
        setPrevOperator(null);
      }
    }
  };
  return (
    <div className="App">
      <label >Calculator:</label> 
      <br/>
      <input type="text" id="calculator-input" name="calculator-input" required value={curInput}></input>
      <br />
      <button type="button" onClick={onPress}>AC</button>
      <button type="button" onClick={onPress}>+/-</button>
      <button type="button" onClick={onPress}>/</button>
      <br />
      <button type="button" onClick={onPress}>7</button>
      <button type="button" onClick={onPress}>8</button>
      <button type="button" onClick={onPress}>9</button>
      <button type="button" onClick={onPress}>*</button>
      <br />
      <button type="button" onClick={onPress}>4</button>
      <button type="button" onClick={onPress}>5</button>
      <button type="button" onClick={onPress}>6</button>
      <button type="button" onClick={onPress}>-</button>
      <br />
      <button type="button" onClick={onPress}>1</button>
      <button type="button" onClick={onPress}>2</button>
      <button type="button" onClick={onPress}>3</button>
      <button type="button" onClick={onPress}>+</button>
      <br />
      <button type="button" onClick={onPress}>0</button>
      <button type="button" onClick={onPress}>.</button>
      <button type="button" onClick={onPress}>=</button>
    </div>
  );
}

export default App;
