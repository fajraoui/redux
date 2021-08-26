import { motion } from 'framer-motion';
import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Actions';
import { GoPlus } from "react-icons/go";

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault()
        const newTask = {
          id:Date.now(),
          title: title,
          description:description,
          isDone: false,
        };
        setTitle("");
        setDescription("");
        dispatch(addTodo(newTask));
      };
    return (
        <div className="add">
          <h1 id="title">Benvenuto nella mia lista da fare</h1>
            <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="inserisci il titolo"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
            <br/>
        <input
          type="text"
          value={description}
          placeholder="inserisci la descrizione"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br/>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => handleSubmit}
        
      >
        <GoPlus />
      </motion.button>
        
      </form>
        </div>
    )
}

export default AddTask
