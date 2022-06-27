const state = {
  tasks: [],
};

const getters = {
  completedTasks: (state) => {
    return state.tasks.filter((task) => task.completed);
  },
  todoTasks: (state) => state.tasks.filter((task) => !task.completed),
  totalCompletedTasks: (state, getters) => getters.completedTasks.length,
  searchTaskById: (state) => (id) => state.tasks.find((task) => task.id === id),
  welcome: (state, getters, rootState, rootGetters) => {
    return rootGetters.welcomeMessage;
  },
};

const mutations = {
  listTasks: (state, { tasks }) => {
    state.tasks = tasks;
  },
};
const actions = {
  listTasks: async ({ commit, dispatch }) => {
    const tasks = await dispatch("searchTasks");

    commit("listTasks", { tasks });

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

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
