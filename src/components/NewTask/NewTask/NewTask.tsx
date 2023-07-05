import { FC } from "react";
import Section from "../../UI/Section/Section";
import TaskForm from "../TaskForm/TaskForm";
import useFetch from "../../../hooks/use-fetch";
import { OnAddTaskType, URL } from "../../../types/types";

const NewTask: FC<OnAddTaskType> = (props) => {
  const { isLoading, error, sendRequest: sendTaskHandler } = useFetch();

  const createTask = (taskText: string, taskData: any) => {
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText: string) => {
    sendTaskHandler(
      {
        url: URL.TASKS,
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ text: taskText }),
      },
      createTask.bind(null, taskText)
    );
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
