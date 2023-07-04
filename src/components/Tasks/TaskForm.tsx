import { FC, FormEvent, useRef } from "react";
import styles from "./TaskForm.module.css";

const TaskForm: FC = () => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredValue = taskInputRef.current?.value;
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input type="text" ref={taskInputRef} />
      <button type="submit">click</button>
    </form>
  );
};

export default TaskForm;
