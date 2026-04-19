import { useState } from 'react';
import './App.css';
import { PlusIcon,DeleteIcon } from './button';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
 

  return (
    <div className="App">
      <div className="header">
        <h2>To-Do List</h2>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Add a new task..." value={task} onChange={(e) => setTask(e.target.value)} />
        <button id="add-button" onClick={() => {
          if (task.trim() !== '') {
            setTodos([...todos, task]);
            setTask('');
          }
        }}>{PlusIcon()}</button>
      </div>
      <div className="todo-list">
        {(todos.length === 0) ?( <div className="empty-message">No tasks yet! Add a task to get started.</div>) 
       : (todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <span>{todo}</span>
              <button className="delete-button" onClick={() => {
                setTodos(todos.filter((_, i) => i !== index));
              }}>Delete</button>
            </div>
        )))}
      </div> 
      <div className="footer">  
        <h3>You have {todos.length} pending tasks</h3>
        <button id="clear-button" onClick={() => setTodos([])}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
