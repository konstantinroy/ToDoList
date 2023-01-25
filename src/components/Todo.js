import React, { useRef, useState, useEffect } from "react";
import { RiTodoFill } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import styles from "./Todo.module.scss";

function Todo({ todo, deleteTodo, toggleTodo }) {
  const divRef = useRef(null);
  const [watchText, setWatchText] = useState(false)

  const watchTodoText = () => {
    setWatchText(!watchText)
  }

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
    <div
      className={`${styles.todoBlock}
      ${todo.isCompleted ? styles.completedTodo : ""}
      `}
    >
      <div className={styles.todoBox }>
        <RiTodoFill className={styles.todoIcon} />
        <div 
        className={`${styles.textBlock}
        ${watchText ? styles.visTextBlock : ''}
        `}
        onClick={watchTodoText}
        >
        <p>{todo.text}</p>
        </div>
      </div>
      {!watchText &&
      <div className={styles.todoBox}>
        <button onClick={() => deleteTodo(todo.id)}>
          <RiDeleteBin2Line className={styles.deleteIcon}/>
        </button>
        <button onClick={() => {
          toggleTodo(todo.id)
          }}>
          {todo.isCompleted 
           ? <VscChromeClose className={styles.XIcon} />
           : <BsCheckLg className={styles.checkIcon}
            />}
        </button>
      </div>
      }
    </div>
    <div ref={divRef} />
    </>
    
  );
}

export default Todo;
