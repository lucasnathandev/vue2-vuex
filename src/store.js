import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    tasks: [],
  },
  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    todoTasks: (state) => state.tasks.filter((task) => !task.completed),
    totalCompletedTasks: (state, getters) => getters.completedTasks.length,
    searchTaskById: (state) => (id) =>
      state.tasks.find((task) => task.id === id),
  },
  mutations: {
    // listTasks: (state, payload) => {
    // ES6
    // before state snapshot
    listTasks: (state, { tasks }) => {
      console.log("before state snapshot");
      state.tasks = tasks;
      console.log("after state snapshot");
    },
    // affter state snapshot
  },
});
