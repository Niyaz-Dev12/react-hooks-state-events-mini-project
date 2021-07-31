import React,{useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [selectCategory,setSelectCategory]=useState("All");
  const [selectName,setSelectName]=useState("");

  function handleSelect(e){
    setSelectCategory(e.target.value);
    }
  
    function handleName(e){
      setSelectName(e.target.value);
      }


  const arrayOptions=categories.map((category,index)=>(
    <option value={category} key={index}>{category}</option>
  ))


  const newItem={text: selectName,
  category: selectCategory}



  const onSubmit=(e)=>{
   e.preventDefault();
   onTaskFormSubmit(newItem);
  }
  return (
    <form className="new-task-form" onSubmit={onSubmit}>
      <label>
        Details
        <input type="text" name="text" value={selectName} onChange={handleName}  />
      </label>
      <label>
        Category
        <select name="category" onChange={ handleSelect} value={selectCategory}>
          {arrayOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
