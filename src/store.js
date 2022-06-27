import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const counterModule = {
  namespaced: true,
  state: {
    counter: 0,
  },
  getters: {
    actualCounter: (state) => state.counter,
  },
};

const tasksModule = {
  namespaced: true,
  state: {
    tasks: [],
  },
  getters: {
    completedTasks: (state, getters, rootState /*,rootGetters*/) => {
      console.log("Getters: state:", state, rootState);
      return state.tasks.filter((task) => task.completed);
    },
    todoTasks: (state) => state.tasks.filter((task) => !task.completed),
    totalCompletedTasks: (state, getters) => getters.completedTasks.length,
    searchTaskById: (state) => (id) =>
      state.tasks.find((task) => task.id === id),
    welcome: (state, getters, rootState, rootGetters) => {
      //Accessing global getters and state into namespaced modules
      console.log("Global State:", rootState.user);
      console.log("Global Getter:", rootGetters.welcomeMessage);
      return rootGetters.welcomeMessage;
    },
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
    listTasks: async ({
      commit,
      dispatch,
      state,
      rootState /*, getters, rootGetters*/,
    }) => {
      console.log("action: listTasks");
      const tasks = await dispatch("searchTasks");
      console.log("mutation: listTasks");
      commit("listTasks", { tasks });
      console.log("Actions: state:", state, rootState);
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
};

const store = new Vuex.Store({
  state: {
    user: "Plinio Naves",
  },
  getters: {
    welcomeMessage: (state) => `Hello ${state.user}`,
  },
  modules: {
    counter: counterModule,
    tasks: tasksModule,
  },
});

console.log("Store", store);

export default store;
