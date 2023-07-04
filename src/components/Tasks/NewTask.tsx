import { FC } from "react";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask: FC = () => {
  return (
    <Section>
      <TaskForm />
    </Section>
  );
};

export default NewTask;
