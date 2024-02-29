import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(['Create Todo List', 'Add to the list']);
  const addNewTask = (e) => {
    e.preventDefault();
    let newTask = document.getElementById("taskInput");
    if (newTask) {
      setTasks(prevTasks => [...prevTasks, newTask]);
    }
    console.log(tasks)
  };


  return (
    <>
      <h1>Attempting to Conquer the Chaos</h1>
      <h2>Current Procrastination List:</h2>
      <div className="card">
        <form onSubmit={(e) => addNewTask(e)}>
        <input id="taskInput" type="text" placeholder='New Task'></input>
        <button id="sumbitButton">Add New Task</button>
        </form>
      </div>
      <div className="tasksContainer">
        <ul id="tasks">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
