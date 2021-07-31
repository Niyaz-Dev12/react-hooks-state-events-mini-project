import React,{useState} from "react";

function CategoryFilter({onDisplayButton,categories}) {
  
  const handleClass=(e)=>{
    e.target.classList.remove("selected");
  }


  const arrayButton=categories.map((button,index)=>(
    <button name={button} key={index} onClick={onDisplayButton} onBlur={handleClass}>{button}</button>
  ));


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {arrayButton}
    </div>
  );
}

export default CategoryFilter;
