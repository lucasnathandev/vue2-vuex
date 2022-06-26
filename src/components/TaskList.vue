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
      />
    </ul>

    <p v-else>No task completed.</p>

    <TaskSave v-if="showForm" :task="selectedTask" />
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";

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
    };
  },
  computed: {
    ...mapState(["tasks"]),
    ...mapGetters(["completedTasks", "todoTasks", "totalCompletedTasks"]),
  },
  created() {
    /*this.$store.commit({
      type: "listTasks",
    });*/
    setTimeout(() => {
      this.listTasks({
        tasks: [
          { id: 1, title: "Learn Vue", completed: true },
          { id: 2, title: "Learn Vue Router", completed: true },
          { id: 3, title: "Learn Vuex", completed: false },
        ],
      });
    }, 2000);
  },
  methods: {
    // ...mapMutations(["listTasks"]),
    ...mapMutations({
      loadTasks: "listTasks", //Alias
      listTasks: (commit, payload, options) => {
        commit("listTasks", payload, options);
      },
    }),
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
