import { FC, FormEvent, useRef } from "react";
import { TaskFormType } from "../../../types/types";
import styles from "./TaskForm.module.css";

const TaskForm: FC<TaskFormType> = (props) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredValue = taskInputRef.current?.value;
    if (enteredValue) {
      if (enteredValue.trim().length > 0) {
        props.onEnterTask(enteredValue);
      }
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? "Sending..." : "Add task"}</button>
    </form>
  );
};

export default TaskForm;
