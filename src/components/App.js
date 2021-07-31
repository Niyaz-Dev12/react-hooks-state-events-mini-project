import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });




function App() {
  const [tasks,setTasks]=useState(TASKS);
  
  const [displayButton,setDisplayButton]=useState("All");

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  const visibleTasks = tasks.filter(
    (task) => displayButton === "All" || task.category === displayButton
  );
 

  function handleDisplayButton(event){
    event.target.classList.add("selected");
     setDisplayButton(event.target.name);

      
  }


    function handleSubmit(obj){
      setTasks([...tasks,obj]);
      
    }

    
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onDisplayButton={handleDisplayButton} 
      categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit} />
      <TaskList onDeleteTask={handleDeleteTask} tasks={visibleTasks} />
    </div>
  );
}

export default App;
