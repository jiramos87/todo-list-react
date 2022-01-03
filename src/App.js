import React, {useState, useEffect} from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskLeft from './components/TaskLeft';
import tasklist from './components/services/tasklist';
import "bootstrap/dist/css/bootstrap.min.css"
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import './App.css';

const App = () => {
  const basename = process.env.BASENAME || "";

  const [ tasks, setTasks ] = useState([
    { label: "Make the bed", done: false },
    { label: "Walk the dog", done: false },
    { label: "Do the replits", done: false }
  ])
  const [ newTask, setNewTask ] = useState([])
  const [ style, setStyle ] = useState({display: 'none'});

  console.log('tasks: ', tasks)


  function addTask(event) {
    event.preventDefault();
    const taskObj = {
      label: newTask,
      done: false
    };
    setTasks(tasks.concat(taskObj));
    console.log('tasks: ', tasks);
    setNewTask('');
  }

  const deleteTask = (label) => {
    setTasks(tasks.filter(task => task.label !== label))
  }
  
  const handleTaskChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleHoverOn = e => {
    setStyle({display: 'block'});
  }
  const handleHoverOff = e => {
    setStyle({display: 'none'})
  }

  

  return (
    <div className="App">
      <div className="container">
        <h1>todos</h1>
        <div className="main-card rounded">
          <TaskForm onSubmit={addTask} 
                  taskValue={newTask} taskChange={handleTaskChange}/>  
          <TaskList tasks={tasks} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} deleteTask={deleteTask} style={style}/> 
          <TaskLeft tasks={tasks}/> 
        </div>
      </div>
    </div>
  )
}

export default App;
