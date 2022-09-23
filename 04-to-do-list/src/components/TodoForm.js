import { useState } from 'react';
import '../stylesheets/TodoForm.css';

function TodoForm(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            text: input,
            completed: false
        }

        props.onSubmit(newTodo)
    }

    return (
        <form 
          className="todo-form"
          onSubmit={handleSubmit}>
            <input
              className="todo-input"
              type='text'
              placeholder="Write a todo"
              name="text"
              onChange={handleChange}
            />
            <button className="todo-button">
                Add todo
            </button>
        </form>
    )
}

export default TodoForm;