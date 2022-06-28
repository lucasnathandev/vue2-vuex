<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Task List</h1>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-primary float-right" @click="showCreateTaskForm">
          <i class="fa fa-plus mr-2"></i>
          <span>Create</span>
        </button>
      </div>
    </div>

    <h3 class="font-weight-light mt-4">Todo ({{ todoTasks.length }})</h3>

    <ul class="list-group" v-if="todoTasks.length > 0">
      <TaskListItem
        v-for="task in todoTasks"
        :key="task.id"
        :taskProp="task"
        @edit="selectTaskForEdit"
        @delete="confirmTaskDelete"
        @complete="completeTask({ task: $event })"
      />
    </ul>

    <p v-else>No task todo.</p>

    <h3 class="font-weight-light mt-4">
      Completed ({{ totalCompletedTasks }})
    </h3>

    <ul class="list-group" v-if="completedTasks.length > 0">
      <TaskListItem
        v-for="task in completedTasks"
        :key="task.id"
        :taskProp="task"
        @edit="selectTaskForEdit"
        @delete="confirmTaskDelete"
        @complete="completeTask({ task: $event })"
      />
    </ul>

    <p v-else>No task completed.</p>

    <TaskSave v-if="showForm" :task="selectedTask" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

import register from "../_store/register";
import TaskSave from "../../../resources/tasks/_components/TaskSave.vue";
import TaskListItem from "../../../resources/tasks/_components/TaskListItem.vue";

const { mapState, mapGetters, mapActions } = createNamespacedHelpers("tasks");

export default {
  components: {
    TaskSave,
    TaskListItem,
  },
  data() {
    return {
      showForm: false,
    };
  },
  computed: {
    ...mapState(["selectedTask"]),
    ...mapGetters([
      "completedTasks",
      "todoTasks",
      "totalCompletedTasks",
      "welcome",
    ]),
  },
  created() {
    register(this.$store);

    this.listTasks();
  },
  methods: {
    ...mapActions([
      "listTasks",
      "completeTask",
      "editTask",
      "deleteTask",
      "selectTask",
      "resetSelectedTask",
    ]),
    confirmTaskDelete(task) {
      const confirm = window.confirm(
        "Do you wish to delete the task: " + task.title + "?"
      );
      if (confirm) {
        this.deleteTask({ task });
      }
    },
    showCreateTaskForm() {
      if (this.selectedTask) {
        this.resetSelectedTask();
        return;
      }
      this.showForm = !this.showForm;
    },
    selectTaskForEdit(task) {
      this.showForm = !this.showForm;
      this.selectTask({ task });
    },
    resetar() {
      this.showForm = false;
      this.resetSelectedTask();
    },
  },
};
</script>
