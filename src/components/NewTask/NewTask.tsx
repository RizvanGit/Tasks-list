import { FC, useState } from "react";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import { ITask } from "../types/shared";
import { URL } from "../../App";

const NewTask: FC<{ onAddTask: (task: ITask) => void }> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const enterTaskHandler = async (taskText: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Sending task failed!");
      }
      const data = await response.json();

      const generatedId = data.name;
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Failed at sending task");
      }
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <h3>{error}</h3>}
    </Section>
  );
};

export default NewTask;
