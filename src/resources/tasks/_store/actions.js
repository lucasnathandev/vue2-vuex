import * as types from "./mutation-types";

export default {
  listTasks: async ({ commit, dispatch }) => {
    const tasks = await dispatch("searchTasks");

    commit(types.LIST_TASKS, { tasks });

    dispatch("login", "Plinio Naves", { root: true });
  },
  searchTasks: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Learn Vue", completed: true },
          { id: 2, title: "Learn Vue Router", completed: true },
          { id: 3, title: "Learn Vuex", completed: false },
        ]);
      }, 2000);
    });
  },
};
