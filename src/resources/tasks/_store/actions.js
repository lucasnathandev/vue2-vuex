import * as types from "./mutation-types";

export default {
  listTasks: async ({ commit, dispatch }) => {
    const tasks = await dispatch("searchTasks");

    commit(types.LIST_TASKS, { tasks });

    dispatch("login", "Plinio Naves", { root: true });
  },
  searchTasks: async () => {
    return await axios.get("/tasks").data;
  },
};
