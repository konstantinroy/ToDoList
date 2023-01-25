import React from "react";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosActions.module.scss";
import Button from "./UI/Button";

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <>
      <Button title="Удалить все" onClick={resetTodos}>
        <RiRefreshLine className={styles.refreshIcon} />
      </Button>
      <Button
        title="Удалить выполненные задачи"
        onClick={deleteCompletedTodos}
        disablded={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;
