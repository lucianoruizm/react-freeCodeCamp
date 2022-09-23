import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Input from './components/Input';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import LogoFCC from './components/LogoFCC';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  }

  const resultCalc = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Pleases enter values");
    }
  }

  return (
    <div className='App'>
      <LogoFCC />
      <div className='calculator-container'>
        <Input input={input}/>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={resultCalc}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClear={() => setInput('')}/>
        </div>
      </div>
    </div>
  );
}

export default App;