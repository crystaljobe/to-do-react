import { useState } from 'react';
import './App.css';
import tasksData from "./assets/tasks.json" 

function App() {
  const [tasks, setTasks] = useState(tasksData);
  const [newTaskInput, setNewTaskInput] = useState('')


   const addNewTask = (e) => {
     const newTask = {id: tasks.length + 1, description: newTaskInput, completed: false};
     setTasks([...tasks, newTask]);
   };

  const handleNewTaskInput = (event) => {
    setNewTaskInput(event.target.value);
  };

  return (
    <>
      <h1>Attempting to Conquer the Chaos</h1>
      <h2>Current Procrastination List:</h2>
      <div className="card">
        <input id="taskInput" type="text" placeholder={'New Task'} onChange={handleNewTaskInput} value={newTaskInput}></input>
        <button onClick={(e) => addNewTask(e)}>Add New Task</button>
      </div>
      <div className="tasksContainer">
        <ul id="tasks">
          {tasks.map((task, i) => !task.completed && <li key={i}>{task.description}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
