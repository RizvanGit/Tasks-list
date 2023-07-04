import { FC, ReactNode } from "react";
import styles from "./TaskItem.module.css";

const TaskItem: FC<{ children?: ReactNode }> = (props) => {
  return <li className={styles.task}>{props.children}</li>;
};

export default TaskItem;
