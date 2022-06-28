import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getTasks() {
    return apiClient.get("/tasks");
  },
  getTask(id) {
    return apiClient.get(`/tasks/${id}`);
  },
  postTask(task) {
    return apiClient.post("/tasks", task);
  },
  putTask(task) {
    return apiClient.put(`/tasks/${task.id}`, task);
  },
  deleteTask(id) {
    return apiClient.delete(`/tasks/${id}`);
  },
};
