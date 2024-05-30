import { Task } from "./reducer";

export enum TaskActionTypes {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  TOGGLE_TASK = "TOGGLE_TASK",
}

interface AddTaskAction {
  type: TaskActionTypes.ADD_TASK;
  payload: {
    newTask: Task;
  };
}

interface DeleteTaskAction {
  type: TaskActionTypes.DELETE_TASK;
  payload: {
    taskId: string;
  };
}

interface ToggleTaskAction {
  type: TaskActionTypes.TOGGLE_TASK;
  payload: {
    taskId: string;
    isDone: boolean;
  };
}

export type TaskActions = AddTaskAction | DeleteTaskAction | ToggleTaskAction;

export const addTaskAction = (newTask: Task): TaskActions => {
  return {
    type: TaskActionTypes.ADD_TASK,
    payload: {
      newTask,
    },
  };
};

export const deleteTaskAction = (taskId: string): TaskActions => {
  return {
    type: TaskActionTypes.DELETE_TASK,
    payload: {
      taskId,
    },
  };
};

export const toggleTaskAction = ({
  taskId,
  isDone,
}: {
  taskId: string;
  isDone: boolean;
}): TaskActions => {
  return {
    type: TaskActionTypes.TOGGLE_TASK,
    payload: {
      taskId,
      isDone,
    },
  };
};
