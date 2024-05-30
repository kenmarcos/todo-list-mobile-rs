import { produce } from "immer";
import { TaskActionTypes } from "./actions";

export interface Task {
  id: string;
  title: string;
  done: boolean;
}

export const tasksReducer = (state: Task[], action: any) => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return produce(state, (draft) => {
        draft.push(action.payload.newTask);
      });

    case TaskActionTypes.DELETE_TASK: {
      const taskToBeDeletedIndex = state.findIndex(
        (task) => task.id === action.payload.taskId
      );

      return produce(state, (draft) => {
        draft.splice(taskToBeDeletedIndex, 1);
      });
    }

    case TaskActionTypes.TOGGLE_TASK: {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.taskId
      );

      return produce(state, (draft) => {
        draft[taskIndex].done = action.payload.isDone;
      });
    }

    default:
      return state;
  }
};
