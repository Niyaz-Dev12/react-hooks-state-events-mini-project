import React,{useState} from "react";
import Task from "./Task";

function TaskList({onDeleteTask,tasks}) {
 
 const arrayTasks=tasks.map((task,index)=>(
   <Task key={index} text={task.text} category={task.category} onDelete={onDeleteTask} />
 ))



  return (
    <div className="tasks">
      {arrayTasks}
    </div>
  );
}

export default TaskList;
