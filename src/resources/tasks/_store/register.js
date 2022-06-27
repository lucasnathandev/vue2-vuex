import tasksModule from "./";
const MODULE_NAME = "tasks";
export default (rootStore) => {
  if (!(MODULE_NAME in rootStore._modules.root._children)) {
    rootStore.registerModule(MODULE_NAME, tasksModule);
  }
};
