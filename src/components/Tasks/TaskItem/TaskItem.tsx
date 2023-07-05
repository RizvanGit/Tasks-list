import { FC, ReactNode } from "react";
import styles from "./TaskItem.module.css";

const TaskItem: FC<{ children?: ReactNode }> = ({ children }) => {
  return <li className={styles.task}>{children}</li>;
};

export default TaskItem;
