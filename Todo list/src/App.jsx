import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:3001/todos');
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (newTask.trim() === '') return;
    const res = await axios.post('http://localhost:3001/todos', {
      task: newTask,
      completed: false
    });
    setTodos([...todos, res.data]);
    setNewTask('');
  };

  const toggleTodo = async (id, completed) => {
    await axios.patch(`http://localhost:3001/todos/${id}`, {
      completed: !completed
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    fetchTodos();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id, todo.completed)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 10 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
