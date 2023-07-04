import { FC } from "react";
import TaskItem from "./TaskItem";
import Section from "../UI/Section";

import styles from "./Tasks.module.css";
import { ITask } from "../types/shared";

type TasksType = {
  items: ITask[];
  error: string | null;
  loading: boolean;
  onFetch: () => void;
};
const Tasks: FC<TasksType> = (props) => {
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

  let content = taskList;
  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }
  if (props.loading) {
    content = <h3>Loading...</h3>;
  }
  return (
    <Section>
      <div className={styles.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
