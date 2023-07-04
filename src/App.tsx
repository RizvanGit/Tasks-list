import React, { useEffect, useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import { ITask } from "./components/types/shared";
import Tasks from "./components/Tasks/Tasks";
import { URL } from "./components/url/url";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();

      const loadedTasks: ITask[] = [];

      for (const taskKey in data) {
        loadedTasks.push({
          id: taskKey,
          text: data[taskKey].text,
        });
      }
      setTasks(loadedTasks);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTaskHandler = (task: ITask) => {
    setTasks((prevState) => prevState.concat(task));
  };
  return (
    <React.Fragment>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks
        items={tasks}
        error={error}
        loading={isLoading}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
