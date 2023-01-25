// import { useState } from "react";
// import { VscChromeClose } from "react-icons/vsc";
import Todo from "./Todo";
import styles from "./TodoList.module.scss";

function TodoList({ todos, deleteTodo, toggleTodo }) {

  return (
    <div className={styles.todoList}>
      {/* {!todos.lenght && <h2>Список задач пуст</h2>} */}

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
