export type RequestType = {
  url: string;
  method?: "GET" | "POST";
  body?: string;
  headers?: {
    [key: string]: string;
  };
};

export type ApplyFnType = (data: any) => void;

export type SendRequestFnType = (
  request: RequestType,
  applyFunction: ApplyFnType
) => void;

export type TasksType = {
  id: string;
  text: string;
};

export type TasksComponentProps = {
  items: TasksType[];
  loading: boolean;
  error: null | string;
  onFetch: SendRequestFnType;
};

export const enum URL {
  TASKS = "https://ts-react-tasks-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
}

export type TaskFormType = {
  onEnterTask: (text: string) => void;
  loading: boolean;
};

export type OnAddTaskType = { onAddTask: (task: TasksType) => void };
