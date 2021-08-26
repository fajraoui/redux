import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo,   removeTodo } from "../Redux/Actions";
import { motion } from "framer-motion";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import Edit from "./Edit";

const Task = ({todo  }) => {
  const dispatch = useDispatch();
  var { id, title, description, isDone }=todo

  
  return (
    
    <div style={isDone ? { textDecoration: "line-through"}  : null} >
      <motion.li
        initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
        animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
        whileHover={{
          scale: 0.9,
          transition: { type: "spring", duration: 0.2 },
        
        }}
        exit={{
          x: "-60vw",
          scale: [1, 0],
          transition: { duration: 0.5 },
          backgroundColor: "rgba(255,0,0,1)",
        }}
        key={id}
        className="card"
      >
        <h2 >
          {title}</h2>
        <h5>{description}</h5>
        <div className="btns">
       
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{           color: "red" }}
            onClick={() => dispatch(removeTodo(id))}
          >
            {" "}
            <IoClose />
          </motion.button>{" "}
           <Edit todo={ todo}/>
        
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => dispatch(completeTodo(id))}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        </div>
      </motion.li>
    </div>
    
  );
};

export default Task;
