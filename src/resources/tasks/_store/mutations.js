import {
  LIST_TASKS,
  EDIT_TASK,
  CREATE_TASK,
  DELETE_TASK,
  SELECT_TASK,
  SET_ERROR,
} from "./mutation-types";

export default {
  [CREATE_TASK]: (state, { task }) => {
    state.tasks.push(task);
  },
  [EDIT_TASK]: (state, { task }) => {
    const index = state.tasks.findIndex((t) => t.id === task.id);
    state.tasks.splice(index, 1, task);
  },
  [DELETE_TASK]: (state, { task }) => {
    const index = state.tasks.findIndex((t) => t.id === task.id);
    state.tasks.splice(index, 1);
  },
  [LIST_TASKS]: (state, { tasks }) => {
    state.tasks = tasks;
  },
  [SELECT_TASK]: (state, { task }) => {
    state.selectedTask = task;
  },
  [SET_ERROR]: (state, { error }) => {
    state.error = error;
  },
};
