import { ReactNode, createContext, useReducer } from "react";
import { Task, tasksReducer } from "../reducers/tasks/reducer";
import {
  addTaskAction,
  deleteTaskAction,
  toggleTaskAction,
} from "../reducers/tasks/actions";

interface TasksContextData {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  toggleTask: ({ taskId, isDone }: { taskId: string; isDone: boolean }) => void;
}

export const TasksContext = createContext({} as TasksContextData);

const taskList: Task[] = [];

interface TasksContextProviderProps {
  children: ReactNode;
}

export const TasksContextProvider = ({
  children,
}: TasksContextProviderProps) => {
  const [tasks, dispatch] = useReducer(tasksReducer, taskList);

  const addTask = (task: Task) => {
    console.log(task);
    dispatch(addTaskAction(task));
  };

  const deleteTask = (taskId: string) => {
    dispatch(deleteTaskAction(taskId));
  };

  const toggleTask = ({
    taskId,
    isDone,
  }: {
    taskId: string;
    isDone: boolean;
  }) => {
    dispatch(toggleTaskAction({ taskId, isDone }));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
      {children}
    </TasksContext.Provider>
  );
};
