import { FC, FormEvent, useRef } from "react";
import styles from "./TaskForm.module.css";

const TaskForm: FC<{ onEnterTask: (t: string) => void; loading: boolean }> = (
  props
) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredValue = taskInputRef.current?.value;
    if (enteredValue && enteredValue.length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input type="text" ref={taskInputRef} />
      <button type="submit">{props.loading ? "Senging..." : "Add task"}</button>
    </form>
  );
};

export default TaskForm;
