import './App.css';
import TodoList from './components/TodoList';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo' 
          alt='freecodecamp-logo'
        />
      </div>
      <div className='main-todo-list'>
        <h1>My todo</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;