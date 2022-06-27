export default {
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
