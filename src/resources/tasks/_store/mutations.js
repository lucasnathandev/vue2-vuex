import { LIST_TASKS } from "./mutation-types";

export default {
  [LIST_TASKS]: (state, { tasks }) => {
    state.tasks = tasks;
  },
};
