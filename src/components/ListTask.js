import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  
  const Todos = useSelector((state) => state.Todos);
  const filter = useSelector((state) => state.filterTodos);
  const result =
    filter === "filter"
      ? Todos.filter((todo) => todo.isDone === false)
      : filter === "done"
      ? Todos.filter((todo) => todo.isDone === true)
      : Todos;
    return (
        <div id="list">
          {result.map((todo, id) => (
            <div id="task"  >
        <Task key={id} todo={todo} />
        </div>
      ))}
       </div>
    )
}

export default ListTask
