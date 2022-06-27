import Vue from "vue";
import Vuex from "vuex";
import counter from "@/resources/counter/_store";
import tasks from "@/resources/tasks/_store";

Vue.use(Vuex);

const state = {
  user: "Plinio",
};

const getters = {
  welcomeMessage: (state) => `Hello ${state.user}`,
};

const actions = {
  login: ({ commit }, user) => {
    commit("login", user);
  },
};

const mutations = {
  login: (state, user) => {
    state.user = user;
  },
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    counter,
    tasks,
  },
});

console.log("Store", store);

export default store;
