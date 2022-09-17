import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const setClick = () => {
    setNumClicks(numClicks + 1);
  }

  const restartCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='freeCodeCamp log'
        />
      </div>
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Button 
          text='Click'
          isClickButton={true}
          setClick={setClick} />
        <Button 
          text='Restart'
          isClickButton={false}
          setClick={restartCounter} />
      </div>
    </div>
  );
}

export default App;
