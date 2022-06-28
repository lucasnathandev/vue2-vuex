import TasksService from "../_services/TasksService";
import * as types from "./mutation-types";

export default {
  completeTask: async ({ dispatch }, payload) => {
    const task = Object.assign({}, payload.task);
    task.completed = !task.completed;
    dispatch("editTask", { task });
  },
  createTask: ({ commit }, { task }) => {
    return TasksService.postTask(task)
      .then((res) => {
        commit(types.CREATE_TASK, { task: res.data });
      })
      .catch((error) => {
        commit(types.SET_ERROR, { error });
      });
  },
  editTask: async ({ commit }, { task }) => {
    try {
      const response = await TasksService.putTask(task);
      commit(types.EDIT_TASK, { task: response.data });
    } catch (error) {
      commit(types.SET_ERROR, { error });
    }
  },
  deleteTask: async ({ commit }, { task }) => {
    try {
      await TasksService.deleteTask(task.id);
      commit(types.DELETE_TASK, { task });
    } catch (error) {
      commit(types.SET_ERROR, { error });
    }
  },
  listTasks: async ({ commit }) => {
    try {
      const response = await TasksService.getTasks();

      commit(types.LIST_TASKS, { tasks: response.data });
    } catch (error) {
      commit(types.SET_ERROR, { error });
    }
  },
  selectTask: ({ commit }, { task }) => {
    commit(types.SELECT_TASK, { task });
  },
  resetSelectedTask: ({ commit }) => {
    commit(types.SELECT_TASK, { task: undefined });
  },
};
