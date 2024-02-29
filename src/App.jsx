import { useState } from 'react';
import './App.css';
import tasksData from "./assets/tasks.json" 

function App() {
  const [tasks, setTasks] = useState(tasksData);

  const renderTask = (task) => {
    console.log(task)
    return`ID: ${task.id}, ${task.description}, COMPLETED: ${task.completed ? "Yes" : "No"}`
  }

  const addNewTask = (e) => {
    e.preventDefault();
    newTask = {id: tasks.length + 1}
    setTasks(tasks => [...tasks, newTask]);
  };
  // const newTask = { id: 16, task: "Buy groceries", completed: false };

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
          {tasks.map((task, i) => <li key={i}>{renderTask(task)}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
