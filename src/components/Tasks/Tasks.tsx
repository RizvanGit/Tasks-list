import { FC } from "react";
import { TasksComponentProps } from "../../types/types";
import Section from "../UI/Section/Section";
import styles from "./Tasks.module.css";
import TaskItem from "./TaskItem/TaskItem";

const Tasks: FC<TasksComponentProps> = (props) => {
  let tasksList = <h2>No tasks found, start adding some!</h2>;

  if (props.items.length > 0) {
    tasksList = (
      <ul>
        {props.items.map((item) => (
          <TaskItem key={item.id}>{item.text}</TaskItem>
        ))}
      </ul>
    );
  }
  let content = tasksList;

  if (props.error) {
    console.error(props.error);

    content = <button onClick={() => props.onFetch}>Try again</button>;
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
