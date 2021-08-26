import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, FILTER, UPDATE_TODO } from "./Const";




export const addTodo = (newTask) => {
    
    return {
      type: ADD_TODO,
      payload: newTask,
    };
  };
 
  export const removeTodo = (id) => {
   return {
     type: DELETE_TODO,
      payload: id,
    };
  };
  export const editTodo = (id,title,description) => {
    return {
      type: EDIT_TODO,
      payload:  {id, description,title}
    };
  };
  export const completeTodo = (id) => {
    return {
      type: COMPLETE_TODO,
      payload: id,
    };
  };
  
  export const filterTodos = (data) => {
    return {
      type: FILTER,
      payload: data
    };
  };
  export const updateTodo =(todo)=>{
    return{
      type:UPDATE_TODO,
      payload:todo,
    }
  }