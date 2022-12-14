import './App.css';
import Testimony from './components/Testimony';
import { data as results } from './components/data';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony key={results.id} results={results}/>
      </div>
    </div>
  );
}

export default App;
