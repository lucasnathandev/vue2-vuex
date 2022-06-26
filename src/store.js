import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    tasks: [
      { id: 1, title: "Learn Vue", completed: true },
      { id: 2, title: "Learn Vue Router", completed: true },
      { id: 3, title: "Learn Vuex", completed: false },
    ],
  },
  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    todoTasks: (state) => state.tasks.filter((task) => !task.completed),
    totalCompletedTasks: (state, getters) => getters.completedTasks.length,
    searchTaskById: (state) => (id) =>
      state.tasks.find((task) => task.id === id),
  },
});
