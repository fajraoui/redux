import React from "react";
import { useDispatch } from "react-redux";
import { filterTodos } from "../Redux/Actions";
function Filter() {
    const dispatch = useDispatch();
    return (
      <div className="filter-btn">
        
          <button  className="fbtn" onClick={() => dispatch(filterTodos("no-filter"))}  >Tutti</button>
          
          <button  className="fbtn" onClick={() => dispatch(filterTodos("filter"))} >Attivi</button>
         
          <button className="fbtn" onClick={() => dispatch(filterTodos("done"))}  >Fati</button>
         
        
      </div>
    );
  }
  
  export default Filter;