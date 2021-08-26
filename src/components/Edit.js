import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTodo } from "../Redux/Actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement('#root');


const Edit = ({todo:{id, title, description}}) => {
  const dispatch = useDispatch();
  const [titl, setTitl] = useState(title);
  const [desc, setDesc] = useState(description);
  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo(id, titl, desc));
    closeModal();
  };
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
        onClick={openModal}
      >
        {" "}
        <AiFillEdit />{" "}
      </motion.button>
      <div className="mo">
        <Modal
          isOpen={modalIsOpen}
         
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
      
          <form onSubmit={handleSubmit} className="edit-input">
            <input value={titl} onChange={(e) => setTitl(e.target.value)} />
            <br />
            <input value={desc} onChange={(e) => setDesc(e.target.value)} />

            <div className="modal-button">
              <button>Salvare</button>
            </div>
          </form>
          <button id="a" onClick={closeModal}>Annulare</button>
        </Modal>
      </div>
    </div>
  );
};

export default Edit;
