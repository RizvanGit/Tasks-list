import { FC } from "react";
import TaskItem from "./TaskItem";
import Section from "../UI/Section";

import styles from "./Tasks.module.css";
import { ITask } from "../types/shared";

const Tasks: FC<{ items: ITask[] }> = (props) => {
  let taskList = <h2>No tasks found. You can add some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task: ITask) => {
          return <TaskItem key={task.id}>{task.text}</TaskItem>;
        })}
      </ul>
    );
  }

  const content = taskList;
  return (
    <Section>
      <div className={styles.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
