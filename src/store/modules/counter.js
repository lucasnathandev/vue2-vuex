const getters = {
  actualCounter: (state) => state.counter,
};

const state = {
  counter: 0,
};

export default {
  namespaced: true,
  state,
  getters,
};
