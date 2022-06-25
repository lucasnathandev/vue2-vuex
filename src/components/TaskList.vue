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

    <ul class="list-group" v-if="tasks.length > 0">
      <TaskListItem
        v-for="task in tasks"
        :key="task.id"
        :taskProp="task"
        @edit="selectTaskForEdit"
      />
    </ul>

    <p v-else>No task created.</p>

    <TaskSave v-if="showForm" :task="selectedTask" />
  </div>
</template>

<script>
import TaskSave from "./TaskSave.vue";
import TaskListItem from "./TaskListItem.vue";

export default {
  components: {
    TaskSave,
    TaskListItem,
  },
  data() {
    return {
      showForm: false,
      selectedTask: undefined,
      tasks: [
        { id: 1, title: "Learn Vue", completed: true },
        { id: 2, title: "Learn Vue Router", completed: true },
        { id: 3, title: "Learn Vuex", completed: false },
      ],
    };
  },
  methods: {
    showCreateTaskForm() {
      if (this.selectedTask) {
        this.selectedTask = undefined;
        return;
      }
      this.showForm = !this.showForm;
    },
    selectTaskForEdit(task) {
      this.showForm = true;
      this.selectedTask = task;
    },
    resetar() {
      this.showForm = false;
      this.selectedTask = undefined;
    },
  },
};
</script>
