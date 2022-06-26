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
      state.tasks = tasks;
    },
    // affter state snapshot
  },
  actions: {
    //Actions can be asynchronous and a single action can dispatch as mutations as needed
    // ES5
    // listTasks: (context, payload) => {
    // ES6
    listTasks: ({ commit, dispatch }) => {
      console.log("action: listTasks");
      return dispatch("searchTasks").then((tasks) => {
        console.log("mutation: listTasks");
        commit("listTasks", { tasks });
      });
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
  },
});
