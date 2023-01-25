import React, { useState } from "react";
import styles from "./TodoForm.module.scss";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <>
      <div className={styles.todoForm}>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Добавить задачу"
          />
          <button
          type="submit">+</button>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
