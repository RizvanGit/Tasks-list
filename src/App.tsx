import { useEffect, useState } from "react";
import "./App.css";
import { TasksType, URL } from "./types/types";
import useFetch from "./hooks/use-fetch";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState<TasksType[]>([]);

  const { isLoading, error, sendRequest: fetchTasks } = useFetch();

  useEffect(() => {
    const tasksHandler = (taskObj: any) => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({
          id: taskKey,
          text: taskObj[taskKey].text,
        });
      }
      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: URL.TASKS,
      },
      tasksHandler
    );
  }, [fetchTasks]);

  const taskAddHandler = (task: TasksType) => {
    setTasks((prevState) => prevState.concat(task));
  };
  return (
    <>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </>
  );
}

export default App;
